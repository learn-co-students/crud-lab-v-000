import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {


  render() {
    return (
      <div>
        <RestaurantInput addRestuarant={this.props.addRestuarant} />
        <Restaurants delete={this.props.delete} restaurants={this.props.restaurants} />
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
  addRestuarant: restaurant => dispatch({type: 'ADD_RESTAURANT', restaurant }),
  delete: restaurantId => dispatch({type: 'DELETE_RESTAURANT', restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
