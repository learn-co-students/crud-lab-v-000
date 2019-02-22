import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor () {
    super();
    this.state = {
      review: ''
    }
  }
  handleChange = event => {
    this.setState({review: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({ review: this.state.review, restaurantId: this.props.restaurant.id });
    this.setState({ review: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Write a review:</label><br />
          <input type='text' value={this.state.review} onChange={this.handleChange}></input><br />
          <button type='submit'>Create Review</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
