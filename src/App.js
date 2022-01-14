import React, { Component } from 'react';

import NewsLetter from './components/NewsLetter';

import StockInfo from './components/StockInfo';

import TopStocks from './components/TopStocks';

class App extends Component {

  state = {

    baseURL:'https://api.polygon.io/v2/aggs/ticker/',
    input: 'AAPL',
    restURL: '/range/1/day/2020-06-01/2020-06-17?',
    apiKey: 'apikey=PJ4Sw_6qvzCDoz8DqoiuV5uP4RXrFEAv',
    searchURL: '',
    StockData: {}

  }

  handleSubmit = e => { 
e.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.input + this.state.restURL  + this.state.apiKey
     },
     () => {
      fetch(this.state.searchURL)
      .then(response => response.json()) 
      .then(data => console.log(data))  
      // .then(data => this.setState({ StockData: data }))
      // .then(() => console.log('handleSubmit', this.state.StockData))

      .catch(error => console.error(error))
     } )

    //  console.log('are we inside here?' + this.state.searchURL)

    // console.log('we are inside handleSubmit')
    // e.preventDefault()
    // fetch(this.state.searchURL)
    //   .then(response => response.json()) 
    //   .then(data => console.log(data))  
    //   // .then(data => this.setState({ StockData: data }))
    //   // .then(() => console.log('handleSubmit', this.state.StockData))

    //   .catch(error => console.error(error))

      // console.log(StockData)


  }

  render() {
    // console.log('We are inside render')
    return (


      <div>
        <h1>Platinum Group's Stock Database</h1>

        <StockInfo handleSubmit={this.handleSubmit}/>

        <NewsLetter />

        <TopStocks />


      </div>
    );
  }
}

export default App;
