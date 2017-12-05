import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map(
      (r, i) => {
        return <Restaurant text={r.text} id={r.id} key={i} />
      }
    )
    return(
      <ul>
        Restaurants Component
          {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
