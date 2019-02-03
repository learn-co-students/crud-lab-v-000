import React, { Component } from 'react';
// allows a user to create new restaurants
class RestaurantInput extends Component {
  
  state = {
    text: '',
  }
  
  handleKeyDown = event => {
    this.setState({
      text: event.target.value,
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
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name</label>
          <input type="text" value={this.state.text} onChange={this.handleKeyDown}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
