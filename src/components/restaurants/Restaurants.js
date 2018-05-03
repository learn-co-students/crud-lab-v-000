import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant, index) => <Restaurant store={this.props.store} key={index} restaurant={restaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;
