import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map(
      (restaurant, index) => {
        // return <Restaurant text={r.text} id={r.id} key={i} />
        return <Restaurant store={this.props.store} restaurant={restaurant} key={index} />
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
