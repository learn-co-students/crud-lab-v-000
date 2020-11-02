import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({ text: '' });
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Write a review for this restaurant:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
