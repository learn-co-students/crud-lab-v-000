import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        Review Input:
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
