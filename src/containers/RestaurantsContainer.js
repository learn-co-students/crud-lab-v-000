import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {

    const restaurants = this.props.restaurants;

    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} deleteAssociatedReview={this.props.deleteAssociatedReview}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants

  };

}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({
    type: "ADD_RESTAURANT",
    text
  }),
  deleteRestaurant: id => dispatch({
    type: "DELETE_RESTAURANT",
    id
  }),
  deleteAssociatedReview: id => dispatch({
    type: "DELETE_ASSOCIATED_REVIEW",
    id
  })
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
