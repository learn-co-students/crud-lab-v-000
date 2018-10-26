import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} deleteRestaurant={this.props.deleteRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
        />
      </div>
    )
  }
}


const mapStateToProps = ({ restaurants, reviews }) => ({ restaurants, reviews })
const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id}),
  addReview: object => dispatch({type: 'ADD_REVIEW', object}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
