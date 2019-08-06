import React, { Component } from 'react';
import Restaurants from './Restaurants'

class RestaurantInput extends Component {
  
  state = {
    text: ''
  }

  handleClick = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>New Restaurant:</label>
        <input type="text" value={this.state.text} onChange={this.handleClick}/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
