
import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  };


  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.onFormSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

