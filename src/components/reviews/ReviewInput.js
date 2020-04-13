import React, { Component } from "react";

const defaultState = { text: "" };
class ReviewInput extends Component {
  state = {
    ...defaultState,
    restaurantId: this.props.restaurantId,
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
