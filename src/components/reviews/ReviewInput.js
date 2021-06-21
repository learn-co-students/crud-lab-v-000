import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.text} placeholder="Your Review Here"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
