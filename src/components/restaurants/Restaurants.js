import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

   renderRestaurants = () => {
     return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} />)
   }

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    )
  }
};

export default Restaurants;
