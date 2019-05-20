import React, { Component } from 'react';
import Restaurant from './restaurants'

class Restaurants extends Component {

  render() {

    const restaurantList = this.props.restaurants.map(restaurant =>
      <Restaurant key={restuarant.id} restaurant = {restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)

    return(
      <ul>
      {restaurantList}
      </ul>
    );
  }
}

export default Restaurants;
