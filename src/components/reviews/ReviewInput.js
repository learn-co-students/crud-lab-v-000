import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h4>Add a Review:</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
