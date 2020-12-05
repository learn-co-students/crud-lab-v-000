import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant, updateRestaurant } = this.props
    const restaurantList = restaurants.map(restaurant => 
      <Restaurant 
        key={restaurant.id} 
        restaurant={restaurant} 
        deleteRestaurant={deleteRestaurant} 
        updateRestaurant={updateRestaurant}
      />
    )

    return(
      <div>
        {restaurants.length > 0 && 
          <h1>Restaurants</h1>
        }
        <ul>
          {restaurantList}
        </ul>
      </div>
    );
  }
};

export default Restaurants;