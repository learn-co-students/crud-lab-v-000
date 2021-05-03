import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    const restaurants = this.props.restaurants
    const deleteRestaurant = this.props.deleteRestaurant
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
      )
    })
    return(
      <div> Restaurants
      <ul>
        {restaurantList}
      </ul>
      </div>
    );
  }
};

export default Restaurants;