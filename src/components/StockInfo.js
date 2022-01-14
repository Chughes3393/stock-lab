import React, { Component } from 'react';

class StockInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <form>
                <input type='text' search='search'></input>
                <button onClick={this.props.handleSubmit}>Search </button>
                </form>

                <div>
                    <h3>Price: </h3>
                    <h3>Chart: </h3>
                </div>
            </div>
        );
    }
}

export default StockInfo;
