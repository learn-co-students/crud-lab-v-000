import React, { Component } from 'react';
import Restaurant from './Restaurant.js'
class Restaurants extends Component {

  render() {
    let restaurants = this.props.restaurants.map(restaurant => {
      return <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
    })
    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;