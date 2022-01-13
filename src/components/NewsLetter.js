import React, { Component } from 'react';

class NewsLetter extends Component {
    render() {
        console.log('Hello')
        return (
            <div>
                <h5>Sign Up For Our Newsletter to receive exclusive stock information: </h5>
                <form>
                    <input type='text'></input>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default NewsLetter;
