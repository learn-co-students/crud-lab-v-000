import React, { Component } from 'react';
import Restaurant from './Restaurants';

class Restaurants extends Component {
  render() {
    const {store} = this.props;
    const restaurants = store.getState().restaurants.map((item, index) => {
      return <Restaurant store={store} key={item.id} restaurant={item} />
    });
    
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
