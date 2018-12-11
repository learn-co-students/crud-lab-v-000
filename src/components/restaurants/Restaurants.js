import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {

    const restaurantArr = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
      )
    })


    return(
      <ul>
        {restaurantArr}
      </ul>
    );
  }
};

export default Restaurants;


