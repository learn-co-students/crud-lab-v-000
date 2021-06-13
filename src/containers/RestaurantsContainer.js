import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.actions.addRestaurant}/>
        <Restaurants deleteRestaurant={this.props.actions.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}
const mapStateToProps = state=> ({
  restaurants: state.restaurants
})
const mapDispatchToProps = dispatch => ({
  actions: {
    addRestaurant: data => dispatch({ type: "ADD_RESTAURANT", ...data }),
    deleteRestaurant: id=> dispatch({type: "DELETE_RESTAURANT", id})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
