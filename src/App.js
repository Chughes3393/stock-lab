import React, { Component } from 'react';

import NewsLetter from './components/NewsLetter';

import StockInfo from './components/StockInfo';

import TopStocks from './components/TopStocks';

class App extends Component {

  state = {
    StockData: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('https://yfapi.net/v6/finance/quote')
      .then(response => response.json())   
      .then(data => this.setState({ StockData: data }))
      // .then(() => console.log('handleSubmit' this.StockInfo))
      .catch(error => console.error(error))


  }

  render() {
    return (


      <div>
        <h1>Platinum Group's Stock Database</h1>

        <StockInfo />

        <NewsLetter />

        <TopStocks />


      </div>
    );
  }
}

export default App;
