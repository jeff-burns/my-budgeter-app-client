import React, { Component } from 'react';
import './App.css';
import DropDown from './components/DropDown/DropDown';
import CreditPage from './components/CreditPage/CreditPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyBudgeter</h1>
          <DropDown />
        </header>
        <p className="App-intro">
        Put Monthly Net Income First
        </p>
        <CreditPage />
      </div>
    );
  }
}

export default App;
