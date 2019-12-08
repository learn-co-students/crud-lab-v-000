import React, { Component } from 'react';
import { addRestaurant } from '../../actions/restaurants';
import RestaurantInput from './RestaurantInput';
import { connect } from 'react-redux'


class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};


export default (Restaurants)
