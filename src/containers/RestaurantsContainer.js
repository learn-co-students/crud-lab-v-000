import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    );
  };
}

const MapStateToProps = state => {
  return { 
    restaurants: state.restaurants
  }
};

const MapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: restaurantId => dispatch({ type: 'DELETE_RESTAURANT', restaurantId })
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(RestaurantsContainer)
