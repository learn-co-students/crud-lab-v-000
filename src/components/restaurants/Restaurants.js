import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  render() {
    const restaurants = this.props.store.getState().restaurants.map((r, index) => {
      return <Restaurant key={index} store={this.props.store} restaurant={r} />
    });
    
    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;