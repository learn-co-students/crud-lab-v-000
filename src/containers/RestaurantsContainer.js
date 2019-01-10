import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { addRestaurant, deleteRestaurant } from '../actions/restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    const {restaurants, addRestaurant, deleteRestaurant} = this.props
  
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

export default connect(mapStateToProps, {addRestaurant, deleteRestaurant}) (RestaurantsContainer)
