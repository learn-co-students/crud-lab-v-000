import React, { Component } from 'react';

class RestaurantInput extends Component {

    state = {
      text: ''
    }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // const restaurant = {text: this.state.text}
    this.props.addRestaurant(this.state.text)
    this.setState ({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Restaurant Name</label>
        <input type='text' value={this.state.text} onChange={this.handleChange.bind(this)} />
        <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
