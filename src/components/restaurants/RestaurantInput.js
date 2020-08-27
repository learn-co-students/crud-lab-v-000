import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = { text: '' }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createRestaurant(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a restaurant name: </label>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
