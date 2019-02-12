import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';
import { addRestaurant, deleteRestaurant } from '../components/actions/RestaurantActions';
import cuid from 'cuid';

class RestaurantsContainer extends Component {
  render() {
    let restaurantList = this.props.restaurants.map(restaurant => <Restaurants key={cuid()} restaurant={restaurant} delete={this.props.deleteRestaurant} />);

    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant} />

        <h4>Available Restaurants:</h4>
        <ul>
          {restaurantList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
}

export default connect(mapStateToProps, { addRestaurant, deleteRestaurant })(RestaurantsContainer);
