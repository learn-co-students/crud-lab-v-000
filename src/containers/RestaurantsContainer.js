import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurants: store.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => dispatch({type: 'ADD_RESTAURANT', payload: restaurant}),
    deleteRestaurant: (restaurantId) => dispatch({type: 'DELETE_RESTAURANT', payload: restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
