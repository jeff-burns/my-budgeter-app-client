import React, { Component } from 'react';
// import { Col } from 'reactstrap';
import './App.css';

import DropDown from './components/DropDown/DropDown';
import CreditPage from './components/CreditPage/CreditPage';
import DebitPage from './components/DebitPage/DebitPage';
import LogIn from './components/LogIn/LogIn';
import AcctName from './AcctName/AcctName';

class App extends Component {
  constructor(props) {
    super(props)
      this.toggleAccount = this.toggleAccount.bind(this);
      this.toggleCredit = this.toggleCredit.bind(this);
      this.toggleDebit = this.toggleDebit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        dropdownOpen: false,
        creditOpen: false,
        debitOpen: false,
        acctName: "",
        passWord: "",
        emailSubmitted: false
      };
    }

    toggleAccount() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        debitOpen: false,
        creditOpen: false,
      });
    }

    toggleCredit() {
      this.setState({
        creditOpen: !this.state.creditOpen,
        debitOpen: false,
        dropdownOpen: false
      });
    }

    toggleDebit() {
      this.setState({
        debitOpen: !this.state.debitOpen,
        creditOpen: false,
        dropdownOpen: false
      });
    }

    handleChange(event) {
      console.log(event.target.value)
      this.setState({
        acctName: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault();

      this.setState({
        emailSubmitted: true,
        
      })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { (this.state.emailSubmitted) ?
            <AcctName /> : null }
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown 
              toggleAccount={this.toggleAccount}
              toggleCredit={this.toggleCredit}
              toggleDebit={this.toggleDebit}
          />
        </header>
        
        <main>
          { (this.state.dropdownOpen) ? 
            <LogIn 
              acctName={this.handleChange}
              logOrCreate={this.handleSubmit}
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
