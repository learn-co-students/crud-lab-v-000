import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  restaurantz = () => {
    return this.props.restaurants.map((r, idx) =>
      <Restaurant restaurant={ r } key={ idx } deleteRestaurant={ this.props.deleteRestaurant }/>
    )
  }

  render() {
    return(
      <ul>
        { this.restaurantz() }
      </ul>
    );
  }
};

export default Restaurants;
