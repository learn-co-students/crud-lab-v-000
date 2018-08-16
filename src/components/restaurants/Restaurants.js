import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const restaurantMap = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant 
          key={restaurant.id} restaurant={restaurant} 
          deleteRestaurant={this.props.deleteRestaurant} 
        />
      )
    })

    return(
      <ul>
        {restaurantMap}
      </ul>
    );
  }
};

export default Restaurants;
