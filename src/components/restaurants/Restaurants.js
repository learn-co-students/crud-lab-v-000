import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map((restaurant) => {
      return <Restaurant id={restaurant.id} key={restaurant.id} text={restaurant.text}/>
    })
  }

  render() {
    return(
      <ul>
        { this.renderRestaurants() }
      </ul>
    );
  }
};

export default Restaurants;