import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput formSubmit={this.props.formSubmit} />
        <Restaurants delete={this.props.delete} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formSubmit: input => dispatch({
      type: "ADD_RESTAURANT",
      text: input
    }),
    delete: id => dispatch({
      type: "DELETE_RESTAURANT",
      id: id
    })
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
