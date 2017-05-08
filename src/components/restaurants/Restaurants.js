import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { store } = this.props;

    const restaurants = store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant store={ store } key={index} restaurant={restaurant} />
    });

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
