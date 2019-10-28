import React, { Component } from "react";

class RestaurantInput extends Component {
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
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          ></input>
          <button type="submit">Submit Restaurant</button>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
