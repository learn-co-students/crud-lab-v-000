import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((rest, idx) =>
      <Restaurant restaurant={rest} store={this.props.store} key={idx} />
    )
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;