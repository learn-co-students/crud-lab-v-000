import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux'

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map((r) => {
      return (
        <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={r} />
      )
    })
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