import React, { Component } from 'react';
import './App.css';

import DropDown from './components/DropDown/DropDown';
import CreditPage from './components/CreditPage/CreditPage';
import DebitPage from './components/DebitPage/DebitPage';
import LogIn from './components/LogIn/LogIn'

class App extends Component {
  constructor(props) {
    super(props)
      this.toggleAccount = this.toggleAccount.bind(this);
      this.toggleCredit = this.toggleCredit.bind(this);
      this.toggleDebit = this.toggleDebit.bind(this);
      this.state = {
        dropdownOpen: false,
        creditOpen: false,
        debitOpen: false
      };
    }

    toggleAccount() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    toggleCredit() {
      this.setState({
        creditOpen: !this.state.creditOpen
      });
    }

    toggleDebit() {
      this.setState({
        debitOpen: !this.state.debitOpen
      });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown 
              toggleAccount={this.toggleAccount}
              toggleCredit={this.toggleCredit}
              toggleDebit={this.toggleDebit}
          />
        </header>
        
        <main>
          { (this.state.dropdownOpen) ? 
            <LogIn /> : null }
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
