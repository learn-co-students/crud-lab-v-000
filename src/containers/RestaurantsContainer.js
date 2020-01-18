import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {


  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.add} />
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  //debugger
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: restaurant => dispatch({type: 'DELETE_RESTAURANT', payload: restaurant }),
    add: formData => dispatch({ type: 'ADD_RESTAURANT', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
