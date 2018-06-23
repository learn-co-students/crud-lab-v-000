import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant) => {
          return < Restaurant store={this.props.store} restaurant={restaurant} key={restaurant.id}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;
