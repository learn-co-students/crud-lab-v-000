import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props;
    if (restaurants) {
      const restaurantList = restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      ));
      return <ul>{restaurantList}</ul>;
    } else {
      return null;
    }

    return <ul>{restaurantList}</ul>;
  }
}

export default Restaurants;
