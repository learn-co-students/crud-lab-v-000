import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) =>
  {
    return <Restaurant restaurant={restaurant} store={this.props.store} />
  })
    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;
