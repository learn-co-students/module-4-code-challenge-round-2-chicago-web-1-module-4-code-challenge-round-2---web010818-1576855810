import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: transactions,
      searchTerm: ''
    }

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleChange=(event)=>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {

    // const transactions = this.state.transactions.filter(transaction => transaction.category ==this.state.searchTerm || transaction.description == this.state.searchTerm)
  
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} /> 
        {/* pass constant as a prop  */}
      </div>
    )
  }
}

export default AccountContainer
