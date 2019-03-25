import React, { Component } from 'react';
import Restaurant from './Restaurant'
import RestaurantInput from './RestaurantInput'

class Restaurants extends Component {

  render() {
    console.log(this.props.restaurants)
    const restaurantList = this.props.restaurants.map(restaurant => {
     return (
       <Restaurant
           key={restaurant.id}
           restaurant={restaurant}
           deleteRestaurant={this.props.deleteRestaurant}
       />
     )
   });
    return(
      <ul>
        {restaurantList}
      </ul>

    );
  }
};



export default Restaurants;
