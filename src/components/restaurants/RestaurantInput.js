import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
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
          <label>Add Restaurant</label>
          <input type="text" name="text" id="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <p>{this.state.text}</p>
      </div>
    );
  }
};

export default RestaurantInput;
