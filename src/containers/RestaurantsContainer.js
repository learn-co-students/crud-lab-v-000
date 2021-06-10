import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    debugger
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}


export default connect()(RestaurantsContainer);
// You will then want to create a Restaurants component that renders a list of restaurants, 
//and a Restaurant component that is responsible for each individual restaurant.