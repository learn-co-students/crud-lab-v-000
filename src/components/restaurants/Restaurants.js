import React, { Component } from 'react';
import Restaurant from './Restaurant';

import { connect } from 'react-redux';

class Restaurants extends Component {
  displayRestaurants() {
    return (
      this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/> )
    )
  }

  render() {
    return(
      <ul>
        {this.displayRestaurants()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
})

export default connect(null, mapDispatchToProps)(Restaurants);