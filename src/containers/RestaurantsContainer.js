import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

	handleDispatch = (data) => {
		this.props.dispatch({type: "ADD_RESTAURANT", name: data.text})
	}

	handleDelete = (id) => {
		this.props.dispatch({type: "DELETE_RESTAURANT", restaurantId: id})
	}

  render() {
    return (
      <div>
        <RestaurantInput dispatch={this.handleDispatch}/>
        <Restaurants restaurants={this.props.restaurants} delete={id => this.handleDelete(id)}/>

      </div>
    )
  }
}

const mapStateToProps = state => {
	return {restaurants: state.restaurants}
}

export default connect(mapStateToProps)(RestaurantsContainer)
