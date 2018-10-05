import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
debugger
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} updateRestaurant={this.props.updateRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurantText => dispatch({ type: 'ADD_RESTAURANT', restaurantText }),
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id }),
  updateRestaurant: restaurant => dispatch({ type: 'UPDATE_RESTAURANT', restaurant })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
