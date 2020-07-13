import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const renderRestaurants = () => {
      return this.props.restaurants.map(restaurant => {
        return <Restaurant  restaurant={restaurant} delete={this.props.deleteRestaurant} key={restaurant.id}/>
        // return <li key={restaurant.id}>{restaurant.text}</li>
        // key={restaurant.id} text={restaurant.text}
      })
    }
    return(
      <ul>
        Restaurants Component
        {renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;