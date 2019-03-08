import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
  	const { restaurants, deleteRestaurant } = this.props; // object destructuring
  	const restaurantLis = restaurants.map(restaurant => {
  	  return (
  	  	<Restaurant
  	  	  key={restaurant.id}
  	  	  restaurant={restaurant}
  	  	  deleteRestaurant={deleteRestaurant}
  	  	/>
  	  )  
  	});

    return(
      <ul>
        {restaurantLis}
      </ul>
    );
  }
};

export default Restaurants;