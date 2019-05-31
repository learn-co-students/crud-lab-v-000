import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

import { addRestaurant, removeRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    const { restaurants, addRestaurant, removeRestaurant } = this.props;
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants removeRestaurant={removeRestaurant} restaurants={restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, { addRestaurant, removeRestaurant })(RestaurantsContainer)
