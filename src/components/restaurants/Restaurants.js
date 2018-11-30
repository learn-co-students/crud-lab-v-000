import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          delete={this.props.deleteRestaurant}
        />
      );
    });

    return <ul>{renderRestaurants}</ul>;
  }
}

export default Restaurants;
