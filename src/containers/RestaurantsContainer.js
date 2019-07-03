import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer)
