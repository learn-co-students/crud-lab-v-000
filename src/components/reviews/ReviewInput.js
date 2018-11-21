import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ''
    });
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a review: </label>
          <input type='text' onChange={this.handleOnChange} value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
