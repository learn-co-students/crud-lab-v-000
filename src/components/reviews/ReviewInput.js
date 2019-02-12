import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.add(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {  
    return (
      <div>
        <header><h4>Leave a Review:</h4></header>
        <form onSubmit={this.handleOnSubmit}>
          <p><label>Review</label></p>
          <input type="text" name="name" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
