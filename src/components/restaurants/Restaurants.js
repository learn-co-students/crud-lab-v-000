import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)}
      </ul>
    );
  }
};

const mapDispatchToState = dispatch => ({
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})
export default connect(null, mapDispatchToState)(Restaurants);