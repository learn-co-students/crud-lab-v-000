import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
  	const restaurantList = this.props.store.getState().restaurants.map((restaurant) => {
  		return <Restaurant store={this.props.store} restaurant={restaurant} />
  	})
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;