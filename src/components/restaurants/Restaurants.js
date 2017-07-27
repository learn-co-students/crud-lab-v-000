import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const rests = this.props.store.getState().restaurants.map((rest, idx) => {
      	return <Restaurant key={idx} restaurant={rest} store={this.props.store} />
      });

    return(
      <ul>
        {rests}
      </ul>
    );
  }
};

export default Restaurants;