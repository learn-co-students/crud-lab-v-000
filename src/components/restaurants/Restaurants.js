import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map((restaurant) =>
          <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant}/>
        )}
      </ul>
    );
  }
};

export default Restaurants;
