import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    const { addRestaurant, restaurants, deleteRestaurant } = this.props;

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });
// Note: That's an ES6 shortcut for state => ({ restaurants: state.restaurants }).

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
