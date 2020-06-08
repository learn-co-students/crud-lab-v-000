import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        Restaurants Component
        {restaurants.map((restaurant, id) => 
          <Restaurant key={id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
        )}
      </ul>
    );
  }
};

export default Restaurants;