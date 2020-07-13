import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <h1>RestaurantsContainer</h1>
        {/* {console.log(this.props)} */}
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', payload: text}),
  deleteRestaurant: id => dispatch({type:'DELETE_RESTAURANT', payload: id})
})

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

