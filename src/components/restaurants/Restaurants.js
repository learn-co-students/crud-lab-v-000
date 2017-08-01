import React, { Component } from 'react';
import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map((r,index) => {
      return <Restaurant
        key={index}
        store={this.props.store}
        restaurant={r} />
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
