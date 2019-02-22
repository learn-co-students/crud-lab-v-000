import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: 'ADD_RESTAURANT', text: name }),
})

export default connect(state => ({restaurants: state.restaurants}), mapDispatchToProps)(RestaurantsContainer);
