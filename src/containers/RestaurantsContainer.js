import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}


const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurantData => dispatch({ type: "ADD_RESTAURANT", text: restaurantData }),
    deleteRestaurant: restaurantId => dispatch({ type: "DELETE_RESTAURANT", id: restaurantId })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);