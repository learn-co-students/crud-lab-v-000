import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const renderRestaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} updateRestaurant={this.props.updateRestaurant} />)

    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
