import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleOnClick = event => {
    event.preventDefault();
    debugger;
    
  }

  render() {
    return (
      <div>
        <from onClick={(event) => this.handleOnClick(event)}>
        <input type="text" value={this.state.text}/>
        <input />
        </from>
      </div>
    );
  }
};

export default ReviewInput;
