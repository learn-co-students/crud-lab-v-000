import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
		<h3>Add Restaurant</h3>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <h3>Restaurants</h3>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		restaurants: state.restaurants
	}
}

const mapDispatchToProp = dispatch => {
	return {
		addRestaurant: text => dispatch({
			type: 'ADD_RESTAURANT',
			text: text }),
		deleteRestaurant: id => dispatch({
			type: 'DELETE_RESTAURANT',
			id: id })
	}
}

export default connect(mapStateToProps, mapDispatchToProp)(RestaurantsContainer)
