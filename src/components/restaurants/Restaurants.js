import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  
  render() {
    // debugger
    const restaurants = this.props.store.getState().restaurants.map((item, index) => {
      return <Restaurant restaurant={item} key={index} store={this.props.store} />
    });
   
    return(
      <div>
       Hello World
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;