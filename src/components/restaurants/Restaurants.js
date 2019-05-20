import React, { Component } from 'react';
import Restaurant from './restaurants'

class Restaurants extends Component {

  render() {

    const restaurantList = this.props.restaurants.map(restaurant =>
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
      {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
