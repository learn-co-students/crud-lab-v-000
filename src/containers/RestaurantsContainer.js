import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    const restaurants = this.props.restaurants;
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={restaurants}
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
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", payload: text }),
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", payload: id })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
