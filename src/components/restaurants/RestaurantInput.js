import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create a new restaurant!</h3>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

//Then you will need a RestaurantInput component that allows a user to create new
//restaurants.
