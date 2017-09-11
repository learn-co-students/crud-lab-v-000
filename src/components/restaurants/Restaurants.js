import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((e, i) => {
      return <Restaurant key={i} store={this.props.store} restaurant={e} />
    });
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
