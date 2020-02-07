import React, { Component } from 'react';

import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {

    const { restaurants, deleteRestaurant } = this.props;

    const renderedRestaurants =  restaurants.map((restaurant,index) => {
      return(<Restaurant restaurant={restaurant} key={index} deleteRestaurant={deleteRestaurant} />);
    }

    );

    return(
      <ul>
        {renderedRestaurants} 
      </ul>
    );
  }
};

export default Restaurants;
