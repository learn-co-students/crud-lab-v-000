import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {

    let restaurants = this.props.store.getState().restaurants.map((restaurant, i) => {
      return (
        <Restaurant
          key={i}
          restaurant={restaurant}
          store={this.props.store}
        />
      );
    });

    return(
      <div>
        <h2>Restaurants</h2>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;
