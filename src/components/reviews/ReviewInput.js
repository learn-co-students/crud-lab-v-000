import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({ restaurantId: this.props.restaurantId, text: this.state.text })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChange} />
          <input type='submit' value='Submit Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
