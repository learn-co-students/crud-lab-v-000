import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurantList = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant key={index} id={restaurant.id} store={this.props.store}/>
    })
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;
