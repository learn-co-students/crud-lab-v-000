import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: ""
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text}></input>
        <input type="submit" value="Add Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
