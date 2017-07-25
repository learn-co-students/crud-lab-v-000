import React, { Component } from 'react';
import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {
    //console.log("Text: " + this.props.store.getState())
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      //return <Restaurant text={restaurant.text} key={index} id={restaurant.id} store={this.props.store} />
      return <Restaurant restaurant={restaurant} key={index} store={this.props.store} />
    });
    //console.log(restaurants.length);
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;