import React, { Component } from "react";
import Restaurant from "../restaurants/Restaurant";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
    this.setState({
      text: ""
    });
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
