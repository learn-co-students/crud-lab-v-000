import React, { Component } from 'react';

import Restuarant from './Restaurant'


class Restaurants extends Component {

  render() {
    const restaurantList = this.props.store.getState().restaurants.map(restaurant => {
      return <Restuarant restaurant={restaurant} store={this.props.store} id={restaurant.id} />
    })
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
