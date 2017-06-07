import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    let restaurants = this.props.store.getState().restaurants.map((restaurant, idx) => {
      return <Restaurant 
      restaurant={ restaurant }
      key={ idx }
      store={ this.props.store }/>
    })

    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;