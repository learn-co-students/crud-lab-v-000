import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurantList.map((restaurant) => (
        <Restaurant delete={this.props.delete} key={restaurant.id}  update={this.props.update} restaurant={restaurant}/>))}
      </ul>
    );
  }
};

export default Restaurants;