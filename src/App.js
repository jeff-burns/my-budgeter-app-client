import React, { Component } from 'react';
import './App.css';

import DropDown from './components/DropDown/DropDown';
import CreditPage from './components/CreditPage/CreditPage';
import DebitPage from './components/DebitPage/DebitPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown />
        </header>
        <main>
          <CreditPage />
          <DebitPage />
        </main>
      </div>
    );
  }
}

export default App;
