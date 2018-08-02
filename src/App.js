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

      this.state = {
        dropDownOpen: false,
        acctToggleOpen: false,
        creditOpen: false,
        debitOpen: false,
        acctName: "",
        passWord: "",
        emailSubmitted: false
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
      console.log(event.target.value)
      this.setState({
        acctName: event.target.value
      })
      //also save password here?
    }

    handleLogIn(event) {
      event.preventDefault();
      this.setState({
        emailSubmitted: true,
        acctToggleOpen: false,
        debitOpen: true
      })
      //check state where users are for the user and password
      //THEN fetch that user data from another table in the db and fill card data with it
    }

    handleCreateAccount(event) {
      event.preventDefault();
      this.setState({
        emailSubmitted: true,
        acctToggleOpen: false,
        creditOpen: true
      })
      //fetch post with email and password to users table in db
    }

    toggleEmail() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    //handle credits and debits -
      //do math for adding and subtracting and the averages needed
      //post or put this data to the user data table
      //maybe make a check on current date to the previous data dates and if it's in the same month, do a put, if not do a post for a new month
      //on re-render it should update this data because of the componentDidMount fetch 

  render() {
    return (
      <div className="App">
        <header className="App-header container">
          { (this.state.emailSubmitted) ?
            <Row>
              <Col sm={{ size: 2, offset: 8 }} md={{ size: 2, offset: 9 }} lg={{ size: 2, offset: 10 }}>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleEmail}>
                      <DropdownToggle  caret>
                          {this.state.acctName}
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
            /> : null }
          { (this.state.creditOpen) ? 
            <CreditPage /> : null }
          { (this.state.debitOpen) ?
            <DebitPage /> : null }
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