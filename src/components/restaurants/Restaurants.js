import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const { restaurants } = this.props;

    const restaurantsList = restaurants.map(restaurant => {
      return (
       <Restaurant key={restaurant.id} restaurant={restaurant}/>
      )
    })


    return(
      <ul>
        {restaurantsList}
      </ul>
    );
  }
};

export default Restaurants;