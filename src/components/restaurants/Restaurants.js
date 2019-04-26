import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurants.id} restaurant={restaurant} 
        deleteRestaurant = {this.props.deleteRestaurant}
        />
      )
    })

    return(
      <ul>
        {restaurantList}    
      </ul>
    );
  }
};

export default Restaurants;