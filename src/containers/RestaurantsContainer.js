import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
//import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  // state = {
  //   restaurants: []
  // }

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     restaurants: state.restaurants
//   }
// }

export default RestaurantsContainer
