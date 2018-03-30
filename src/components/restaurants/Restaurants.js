import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurantComponent = this.props.store.getState().restaurants.map(
      restaurant => <Restaurant restaurant={restaurant} store={this.props.store} /> );

    return(
      <ul>
        {restaurantComponent}
      </ul>
    );
  }
};

export default Restaurants;