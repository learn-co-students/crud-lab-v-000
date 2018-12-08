import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput dispatch={this.props.dispatch} />
        <Restaurants restaurants={this.props.restaurants} dispatch={this.props.dispatch} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(RestaurantsContainer)
