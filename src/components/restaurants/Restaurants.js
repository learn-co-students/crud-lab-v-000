import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
  	
    return(
      <ul>
        {this.props.restaurants.map(rest => {
        	return <Restaurant delete={this.props.delete} key={rest.id} restaurant={rest} />
        })}
      </ul>
    );
  }
};

export default Restaurants;