import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const allRestaurants = this.props.restaurants;
    let restaurants;

    if(allRestaurants) {
      restaurants = allRestaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    }

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;