import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  // renderRestaurants = () => { this.props.restaurants.map(restaurant => {
  //   console.log(restaurant)
  //   return (
  //     <Restaurant key={restaurant.id} restaurant={restaurant} /> 
  //   )})
  // }

  render() {
    // decouple
    const {restaurants} = this.props;
    const renderRestaurants = restaurants.map(restaurant => {
      console.log(restaurant)
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} /> 
      )})
    
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
