import React, { Component } from 'react';
import Restaurant from './Restaurant';

export default class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
    return <Restaurant restaurant={restaurant} key={index} store={this.props.store} />
  });

    return(
      <ul>
         {restaurants}
      </ul>
    );
  }
};
