import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
      const restaurants = this.props.store.getState().restaurants.map( (restaurant, index) => {
          return <Restaurant restaurant={restaurant} store={this.props.store} index={index} key={restaurant.id}/>
      })
    return(
      <ul key="one">
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;