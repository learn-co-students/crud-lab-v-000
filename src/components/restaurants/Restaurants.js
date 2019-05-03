import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((restaurant, index) => {
          return (
            <Restaurant key={index} delete={this.props.delete} restaurant={restaurant} restaurantId={restaurant.id} />
          )
        })}
      </ul>
    );
  }
};

export default Restaurants;
