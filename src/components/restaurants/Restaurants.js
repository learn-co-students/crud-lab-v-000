import Restaurant from './Restaurant';
import React, { Component } from 'react';

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} />)
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};


export default Restaurants;