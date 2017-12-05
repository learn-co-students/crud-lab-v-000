import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const bands = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant restaurant={restaurant} key={index} id={restaurant.id} store={this.props.store}/>
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Restaurants;