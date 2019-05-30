import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { addRestaurant, deleteRestaurant } from '../actions/restaurants.js';
import { connect } from 'react-redux';


class RestaurantsContainer extends Component {

  render() {

    const { restaurants, addRestaurant, deleteRestaurant } = this.props;
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />

        <Restaurants
          deleteRestaurant={deleteRestaurant}
          restaurants={restaurants}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, { addRestaurant, deleteRestaurant }) (RestaurantsContainer);
