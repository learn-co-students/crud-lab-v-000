import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants() {
    return this.props.restaurants.map(restaurant => {
      return <Restaurant  restaurant={restaurant} delete={this.props.deleteRestaurant} key={restaurant.id}/>
      // return <li key={restaurant.id}>{restaurant.text}</li>
      // key={restaurant.id} text={restaurant.text}
    })
  }

  render() {
    
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;