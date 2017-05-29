import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  logThing(e){
    console.log(this.props.store.getState())
  }

  render() {
    const { store } = this.props;

    let allRestaurants = store.getState().restaurants.map((restaurant, index) => <Restaurant store={store} key={index} restaurant={restaurant} /> );

    return(
      <div>
        <button onClick={(e)=>this.logThing(e)}>Click to log</button>
        <ul>
          {allRestaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;
