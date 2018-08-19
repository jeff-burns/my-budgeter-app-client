import React, { Component } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import "./App.css";

import DropDown from "./components/DropDown/DropDown";
import CreditPage from "./components/CreditPage/CreditPage";
import DebitPage from "./components/DebitPage/DebitPage";
import LogIn from "./components/LogIn/LogIn";
// import AcctName from './AcctName/AcctName';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
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
      isDisabled: true
      // fetchedUsers: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/userinput")
      .then(response => response.json())
      .then(resp => {
        const fetchedUsers = resp;
        this.setState({
          fetchedUsers: fetchedUsers
        });
      });
  }

  toggleAccount() {
    this.setState({
      acctToggleOpen: !this.state.acctToggleOpen,
      debitOpen: false,
      creditOpen: false
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
      [name]: value
    });
    this.handleDisable();
  }

  handleDisable() {
    if (
      this.state.createUserEmail.length &&
      this.state.createPassword.length &&
      this.state.createPassword2.length
    ) {
      this.setState({
        isDisabled: false
      });
    }
    if (this.state.userEmail.length > 0 && this.state.password.length > 0) {
      this.setState({
        isDisabled: false
      });
    }
  }

  handleLogIn(event) {
    event.preventDefault();
    this.state.fetchedUsers.filter(user => {
      console.log(user);
      if (
        user.userEmail === this.state.userEmail &&
        user.password === this.state.password
      ) {
        // const currentUser = user;
        this.setState({
          emailSubmitted: true,
          acctToggleOpen: false,
          debitOpen: true,
          // currentUser: currentUser,
          loggedIn: true
        });
        // const expenseAmount = event.target["expenseAmount"].value;
        // const expenseDate = event.target["expenseDate"].value;
        // const expenseType = event.target["expenseType"].value;
        // const expenseNote = event.target["expenseNote"].value
        // const newDebit = {
        //   expenseAmount,
        //   expenseDate,
        //   expenseType,
        //   expenseNote
        // }
        
      }
        // if (
        //   user.userEmail !== this.state.userEmail &&
        //   user.password !== this.state.password
        // ){
        //   this.setState({
        //     isDisabled: true
        //   });
        //     alert("Email and/or Password Does Not Match");
        // } 
    });

    //check state where users are for the user and password
    //THEN fetch that user data from another table in the db and fill card data with it
  }

  handleCreateAccount(event) {
    event.preventDefault();
    if (
      event.target["createPassword"].value !==
      event.target["createPassword2"].value
    ) {
      alert("Passwords Do Not Match");
      this.setState({
        isDisabled: true
      });
    } else {
      this.setState({
        // [name]: [value],
        emailSubmitted: true,
        acctToggleOpen: false,
        creditOpen: true,
        userEmail: this.state.createUserEmail,
        password: this.state.createPassword,
        loggedIn: false
      });
    }
  }

  toggleEmail() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleLogOut() {
    this.setState({
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
      fetchedUsers: {},
      incomeInput: 0,
      incomeDate: "",
      incomeSource: "",
      incomeNote: "",
      expenseAmount: 0,
      expenseDate: "",
      expenseType: "",
      expenseNote: ""
    })
  }

  handleCredit(event) {
    event.preventDefault();
    const email = this.state.userEmail;
    const incomeInput = event.target["incomeInput"].value;

    // const totalIncome = this.state.fetchedUsers[this.state.userEmail].incomeInput + incomeInput;
    const incomeDate = event.target["incomeDate"].value;
    const incomeSource = event.target["incomeSource"].value;
    const incomeNote = event.target["incomeNote"].value;
    const newUser = {
      userEmail: email,
      password: this.state.password,
      // totalIncome: totalIncome,
      incomeInput: incomeInput,
      incomeDate: incomeDate,
      incomeSource: incomeSource,
      incomeNote: incomeNote
    };
    this.setState(newUser);
  }
  //handle credits and debits update-
  //do math for adding and subtracting and the averages needed
  //post or put this data to the user data table
  //maybe make a check on current date to the previous data dates and if it's in the same month, do a put, if not do a post for a new month
  //on re-render it should update this data because of the componentDidMount fetch

  handleDebit(event) {
    event.preventDefault();
    console.log(event.target["expenseAmount"].value);
    const expenseAmount = event.target["expenseAmount"].value;
    const expenseDate = event.target["expenseDate"].value;
    const expenseType = event.target["expenseType"].value;
    const expenseNote = event.target["expenseNote"].value;
    const userDebit = {
      expenseAmount: expenseAmount,
      expenseDate: expenseDate,
      expenseType: expenseType,
      expenseNote: expenseNote
    };
    this.setState(userDebit);

    const userDebitPost = {
            userEmail: this.state.userEmail,
            password: this.state.password,
            totalIncome: 0,
            incomeInput: 0,
            incomeDate: expenseDate,
            incomeSource: "",
            incomeNote: "",
            expenseAmount,
            expenseDate,
            expenseType,
            expenseNote
    }
    fetch("http://localhost:3000/api/v1/userinput", {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json"
          }),
          body: JSON.stringify(userDebitPost)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
          });
  }

  render() {
    // console.log(this.state.fetchedUsers.userEmail.incomeInput);
    console.log(this.state.fetchedUsers);

    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header container">
          {this.state.emailSubmitted ? (
            <Row>
              <Col
                sm={{ size: 2, offset: 8 }}
                md={{ size: 2, offset: 9 }}
                lg={{ size: 2, offset: 10 }}
              >
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleEmail}
                >
                  <DropdownToggle caret>{this.state.userEmail}</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem color="muted">My Account</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.handleLogOut}>Log Out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          ) : null}
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown
            toggleAccount={this.toggleAccount}
            toggleCredit={this.toggleCredit}
            toggleDebit={this.toggleDebit}
          />
        </header>

        <main className="container">
          {this.state.acctToggleOpen ? (
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
            />
          ) : null}
          {this.state.creditOpen ? (
            <CreditPage handleCredit={this.handleCredit} />
          ) : null}
          {this.state.debitOpen ? (
            <DebitPage 
                handleDebit={this.handleDebit} 
                fetchedUsers={this.state.fetchedUsers}
                userEmail={this.state.userEmail}
              />
          ) : null}
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
