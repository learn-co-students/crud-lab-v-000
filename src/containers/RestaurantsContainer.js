import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import  { connect } from 'react-redux';
import { addRestaurant } from '.././actions/addRestaurant';
import { deleteRestaurant } from '.././actions/deleteRestaurant'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={ this.props.addRestaurant } />
        <Restaurants restaurants={ this.props.restaurants } delete={ this.props.deleteRestaurant } />
      </div>
    )
  }
}

export default connect(state => ({ restaurants: state.restaurants }), { addRestaurant, deleteRestaurant })(RestaurantsContainer)
