import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
  	
  	const RESTS = this.props.store.getState().restaurants.map((rest) => {
  		return (<Restaurant key={rest.id} restaurant={rest} store={this.props.store} />)
  	});

    return(
      <ul>
        {RESTS}
      </ul>
    );
  }
};

export default Restaurants;