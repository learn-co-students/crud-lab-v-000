import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <h4>Add a Restaurant</h4>
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

export default RestaurantInput;
