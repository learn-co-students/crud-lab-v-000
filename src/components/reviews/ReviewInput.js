import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log('Submit')
  }

  render() {
    return (
      <div>
        Write a Review:<br />
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleOnChange} />
          <input type='submit' value='Submit Review'  />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
