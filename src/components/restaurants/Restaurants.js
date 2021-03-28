import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.delete}/>)}
      </ul>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}
export default connect(null, mapDispatchToProps)(Restaurants);