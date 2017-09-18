import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {

    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant store={this.props.store} restaurant={restaurant} key={index} />
    });

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;