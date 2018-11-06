import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants;
    const deleteRestaurant = this.props.deleteRestaurant;
    const restaurantList = restaurants.map((restaurant, id) => {
      return (
        <Restaurant key={id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
      )
    });

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;