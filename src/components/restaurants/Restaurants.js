import React, { Component } from 'react';
import Restaurant from './Restaurant'

// class Restaurants extends Component {

//   renderRestaurants = () => {
//     return this.props.restuarants.map(restaurant =>
//        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
//   }

  const Restaurants = props => {
    const restaurants = props.restaurants.map(restaurant =>
       <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={props.deleteRestaurant}/>)

  //render() {
    return(
      <ul>
        Restaurants Component
      {restaurants}
      </ul>
    );
  }
//};

export default Restaurants;



