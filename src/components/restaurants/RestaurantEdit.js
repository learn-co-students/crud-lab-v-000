import React, { Component } from 'react';

class RestaurantEdit extends Component {

  state = {
    text: this.props.restaurant.text
  }

  handleEditChange = (event) => {
    this.setState({
        text: event.target.value,
    });
  }
  
  handleEditSubmit = (event) => {
    event.preventDefault();
    this.props.restaurant.text = this.state.text
    this.props.updateRestaurant(this.props.restaurant);
    this.props.toggleEdit()
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleEditSubmit}>
        <h3>Edit Restaurant</h3>
        <input 
          type="text"
          value={this.state.text}
          onChange={this.handleEditChange}></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default RestaurantEdit;