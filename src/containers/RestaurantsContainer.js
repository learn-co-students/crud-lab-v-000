import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux';
import {addRestaurant, removeRestaurant} from '../actions/actions.js'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants delete={this.props.removeRestaurant} restaurantList={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStoreToProps = (state) =>{
  return {restaurants: state.restaurants}
}
export default connect(mapStoreToProps,{addRestaurant, removeRestaurant})(RestaurantsContainer)
