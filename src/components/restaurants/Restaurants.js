import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {


  render() {
  const restaurantList = this.props.restaurants.map(
    restaurant => <Restaurant 
    key={restaurant.id} 
    restaurant={restaurant} 
    delete={this.props.deleteRestaurant}
    />)

    return(
      <ul>
        Restaurants Component
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;