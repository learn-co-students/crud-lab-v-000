import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  add: restaurant => dispatch({ type: "ADD_BAND", payload: restaurant }),
   delete: id => dispatch({type: 'DELETE_BAND', payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
