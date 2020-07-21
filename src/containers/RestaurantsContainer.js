import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
//connect to Redux and pass the appropriate props down to its children. 
import { connect } from 'react-redux'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

//export default RestaurantsContainer
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
} //needed to set up basic reducer

//need to allow add for input form
const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', payload: text }),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)