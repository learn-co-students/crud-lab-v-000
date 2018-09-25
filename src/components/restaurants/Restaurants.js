import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    // decouple
    const {restaurants, deleteRestaurant} = this.props;
    const renderRestaurants = restaurants.map(restaurant => {
      console.log(this.props)
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/> 
      )})
    
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;