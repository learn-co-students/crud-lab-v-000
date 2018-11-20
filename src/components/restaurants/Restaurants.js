import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render(){
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant =>
      { return (
        <Restaurant
          deleteRestaurant={ deleteRestaurant }
          key={restaurant.id}
          restaurant={restaurant}/>
        )
      });

      return(
        <ul>
          { restaurantList }
        </ul>
      );
  }
};

export default Restaurants;
