import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header.js'
import { Balance } from './components/balance.js'
import { IncomeExpenses } from './components/incomeExpenses.js'
import { TransactionList } from './components/transactionList.js'
import { AddTransaction } from './components/addTransaction.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    );
  }
}

export default App;
