import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  //renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)

  render() {
    const restaurants = this.props.restaurants.map(restaurant => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
