import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionsData => this.setState({
      transactions: transactionsData
    }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const allTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm)  || transaction.category.toLowerCase().includes(this.state.searchTerm) )

    return (
      <div>
        <Search 
        handleChange={this.handleChange}/>
        <TransactionsList
        transactions={allTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
