import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  displayRestaurants = () => this.props.restaurants.map((restaurant, index) => <li><Restaurant key={index} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/></li>);

  render() {
    return(
      <ul>
        {this.displayRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;