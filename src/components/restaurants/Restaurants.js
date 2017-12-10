import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant 
        store={ this.props.store }
        key={index}
        restaurant={ restaurant }
        // id={ restaurant.id }
      />
    });

    return(
      <div className='restaurants'>
        <h2>Restaurants</h2>
          { restaurants }
      </div>
    );
  }
};

export default Restaurants;