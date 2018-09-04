import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.renderRestaurants()} 
      </ul>
    );
  }

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} key={restaurant.id}/>)
  };
  
};

export default Restaurants;
