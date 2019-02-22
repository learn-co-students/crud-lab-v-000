import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({ text: ''})
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
