import React, { Component } from "react";
import { connect } from "react-redux";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRestaurant: restaurant =>
      dispatch({ type: "ADD_RESTAURANT", restaurant }),
    deleteRestaurant: restaurant =>
      dispatch({ type: "DELETE_RESTAURANT", restaurant })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
