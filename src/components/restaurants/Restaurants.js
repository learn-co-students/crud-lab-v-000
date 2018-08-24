import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)
  }

  render() {
    // console.log(this.props)
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;