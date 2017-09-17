import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map((rest, index) => {
      return <Restaurant key={index} restaurant={rest} store={this.props.store}/>
    })

    return(
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;