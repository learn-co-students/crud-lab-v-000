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
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Create new restaurant here!</label>
          <br></br><br></br>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
