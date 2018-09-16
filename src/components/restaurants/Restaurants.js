import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    let restaurants = this.props.restaurants.map((restaurant, index) => (
      <Restaurant
        key={index}
        deleteRestaurant={this.props.deleteRestaurant}
        restaurant={restaurant}
      />
    ));

    return <ul>{restaurants}</ul>;
  }
}

export default Restaurants;
