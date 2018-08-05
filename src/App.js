import React, { Component } from 'react';
import { Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './App.css';

import DropDown from './components/DropDown/DropDown';
import CreditPage from './components/CreditPage/CreditPage';
import DebitPage from './components/DebitPage/DebitPage';
import LogIn from './components/LogIn/LogIn';
// import AcctName from './AcctName/AcctName';

class App extends Component {
  constructor(props) {
    super(props)
      this.toggleAccount = this.toggleAccount.bind(this);
      this.toggleCredit = this.toggleCredit.bind(this);
      this.toggleDebit = this.toggleDebit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleLogIn = this.handleLogIn.bind(this);
      this.handleCreateAccount = this.handleCreateAccount.bind(this);
      this.toggleEmail = this.toggleEmail.bind(this);
      this.handleCredit = this.handleCredit.bind(this);
      this.handleDebit = this.handleDebit.bind(this);
      this.handleDisable = this.handleDisable.bind(this);

      this.state = {
        createPassword: "",
        createPassword2: "",
        createUserEmail: "",
        dropDownOpen: false,
        acctToggleOpen: false,
        creditOpen: false,
        debitOpen: false,
        emailSubmitted: false,
        userEmail: "",
        password: "",
        isDisabled: true,
      };
    }

//componentDidMount() {
//  fetch users and passwords and setState 
//}

    toggleAccount() {
      this.setState({
        acctToggleOpen: !this.state.acctToggleOpen,
        debitOpen: false,
        creditOpen: false,
      });
    }

    toggleCredit() {
      this.setState({
        creditOpen: !this.state.creditOpen,
        debitOpen: false,
        acctToggleOpen: false
      });
    }

    toggleDebit() {
      this.setState({
        debitOpen: !this.state.debitOpen,
        creditOpen: false,
        acctToggleOpen: false
      });
    }

    handleChange(event) {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
        this.setState({
          [name]: [value]
          })
      this.handleDisable()

    }    

    handleDisable() {
      if (this.state.createUserEmail.length  && (this.state.createPassword.length ) && (this.state.createPassword2.length )) {
        this.setState({
          isDisabled: false
        })
      }
      if (this.state.userEmail.length > 0 && (this.state.password.length > 0)) {
        this.setState({
          isDisabled: false
        })
      }
    }

    handleLogIn(event) {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      // if ()
      this.setState({
        [name]: [value],
        emailSubmitted: true,
        acctToggleOpen: false,
        debitOpen: true
        })
      //check state where users are for the user and password
      //THEN fetch that user data from another table in the db and fill card data with it
    }

    handleCreateAccount(event) {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      console.log(event.target["createPassword"].value !== event.target["createPassword2"].value)
      if (event.target["createPassword"].value !== event.target["createPassword2"].value) {
        alert("Passwords Do Not Match"); 
        this.setState({
          isDisabled: true
        })     
      } else {
        this.setState({
          [name]: [value],
          emailSubmitted: true,
          acctToggleOpen: false,
          creditOpen: true,
          userEmail: this.state.createUserEmail
        })
      }
    }

    toggleEmail() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    handleCredit(event) {
      event.preventDefault();
      console.log(event.target["incomeInput"].value)
      const incomeInput = event.target["incomeInput"].value;
      const incomeDate = event.target["incomeDate"].value; 
      const incomeSource = event.target["incomeSource"].value;
      const incomeNote = event.target["incomeNote"].value;     
      const newUser = {
        totalIncome: incomeInput,
        incomeInput: incomeInput,
        incomeDate: incomeDate,
        incomeSource: incomeSource,
        incomeNote: incomeNote
      }
      this.setState( newUser )
    }
    //handle credits and debits update-
      //do math for adding and subtracting and the averages needed
      //post or put this data to the user data table
      //maybe make a check on current date to the previous data dates and if it's in the same month, do a put, if not do a post for a new month
      //on re-render it should update this data because of the componentDidMount fetch 

    handleDebit(event) {
      event.preventDefault();
      console.log(event.target["expenseAmount"].value)
      const expenseAmount = event.target["expenseAmount"].value;
      const expenseDate = event.target["expenseDate"].value; 
      const expenseType = event.target["expenseType"].value;
      const expenseNote = event.target["expenseNote"].value;     
      const userDebit = {
        expenseAmount: expenseAmount,
        expenseDate: expenseDate,
        expenseType: expenseType,
        expenseNote: expenseNote
      }
      this.setState( userDebit )
    }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header container">
          { (this.state.emailSubmitted) ?
            <Row>
              <Col sm={{ size: 2, offset: 8 }} md={{ size: 2, offset: 9 }} lg={{ size: 2, offset: 10 }}>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleEmail}>
                      <DropdownToggle  caret>
                          {this.state.userEmail}
                      </DropdownToggle>
                      <DropdownMenu right>
                          <DropdownItem color="muted">Delete User Data</DropdownItem>
                          <DropdownItem divider/>
                          <DropdownItem>Sign Out</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </Col>
            </Row>
              : null }
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown 
              toggleAccount={this.toggleAccount}
              toggleCredit={this.toggleCredit}
              toggleDebit={this.toggleDebit}
          />
        </header>
        
        <main className="container">
          { (this.state.acctToggleOpen) ? 
            <LogIn 
              acctName={this.handleChange}
              logIn={this.handleLogIn}
              createAcct={this.handleCreateAccount}
              userEmail={this.state.userEmail}
              password={this.state.password}
              createUserEmail={this.state.createUserEmail}
              createPassword={this.state.createPassword}
              createPassword2={this.state.createPassword2}
              isDisabled={this.state.isDisabled}
             
            /> : null }
          { (this.state.creditOpen) ? 
            <CreditPage
              handleCredit={this.handleCredit} /> : null }
          { (this.state.debitOpen) ?
            <DebitPage
              handleDebit={this.handleDebit} 
            /> : null }
        </main>
      </div>
    );
  }
}

export default App;

//<AcctName 
// accountName={this.state.acctName}
// isOpen={this.state.dropDownOpen}
// toggle={this.toggleEmail} 
// />