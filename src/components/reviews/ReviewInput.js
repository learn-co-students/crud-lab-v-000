import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <p>Write a Review:</p>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;