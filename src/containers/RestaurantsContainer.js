import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants delete={this.props.delete} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({ type: "ADD_RESTAURANT", text: restaurant.text }),
  delete: restaurant => dispatch({type: 'DELETE_RESTAURANT', id: restaurant.id})
})

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
