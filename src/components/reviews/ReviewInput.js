import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    };
    this.props.addReview(review);

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>
            Review:
            <input
              type="text"
              onChange={event => this.handleOnChange(event)}
              value={this.state.text}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
