import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({
    type: 'ADD_RESTAURANT',
    restaurant
  })
});

export default connect(null, mapDispatchToProps)(RestaurantsContainer);
