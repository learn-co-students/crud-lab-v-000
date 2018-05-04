import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { store } = this.props;
    const restaurants = store.getState().restaurants.map(function(restaurant){
      return <Restaurant restaurant={restaurant} store={store} />
     })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
