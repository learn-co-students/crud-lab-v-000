import React, { Component } from 'react';
/*
import Reviews from './Reviews';
*/

class ReviewInput extends Component {

  state = {
    text: ''
  }

   handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

   handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Add New Review: </label>
          <input
                type="text"
                placeholder="Your Review..."
                value={this.state.text}
                onChange={this.handleChange}>
          </input> <br />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
