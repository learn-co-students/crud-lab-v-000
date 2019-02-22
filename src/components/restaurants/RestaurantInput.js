import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }
  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Restaurant Name:</label><br />
          <input type='text' value={this.state.text} onChange={this.handleChange}></input><br />
          <button type='submit'>Create Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
