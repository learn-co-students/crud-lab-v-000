import React, { Component } from 'react'
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput createRestaurant={this.props.createRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRestaurant: (restaurant) => dispatch({type: 'ADD_RESTAURANT', restaurant}),
    deleteRestaurant: (restaurantID) => dispatch({type: 'DELETE_RESTAURANT', restaurantID})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
