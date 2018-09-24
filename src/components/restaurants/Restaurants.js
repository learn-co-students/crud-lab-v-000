import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    // decouple
    // const restaurants = this.props;
    // replace index with id later
    const renderRestaurants = () => { this.props.restaurants.map(restaurant => {<Restaurant key={restaurant.id} restaurant={restaurant} /> }) }
    // const renderRestaurants = () => {return [] }
    
    return(
      <ul>
        {renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
