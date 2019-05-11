import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Create New Restaurant </label>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input type='submit' />
          </p>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
