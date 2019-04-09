import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import Restaurant from '../components/restaurants/Restaurant'

class RestaurantsContainer extends Component {

renderRestaurants = () => this.props.restaurants.map((restaurant, id) => <Restaurant delete={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants renderRestaurants={this.renderRestaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", payload: name }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", payload: id})
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
