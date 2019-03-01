import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const renderRestaurants = this.props.restaurants.map((restaurant, index) =>
        <Restaurant key={index} deleteRestaurant={this.props.deleteRestaurant} id={restaurant.id} restaurant={restaurant}/>
    )
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;