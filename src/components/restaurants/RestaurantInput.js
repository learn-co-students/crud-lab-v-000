import React, { Component } from "react";

const initialState = {
  text: "",
};

class RestaurantInput extends Component {
  state = {
    ...initialState,
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="text" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
