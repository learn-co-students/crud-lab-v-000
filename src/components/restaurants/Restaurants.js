import React, { Component } from 'react';
import Restaurant from './Restaurant';

const e = React.createElement

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants
    const output = restaurants.map((restaurant, i) => {
      return e(Restaurant, {
        restaurant,
        key: i,
        store: this.props.store
      })
    })

    return (
      <ul className="list-group my-3">
        {output}
      </ul>
    );
  }
};

export default Restaurants;