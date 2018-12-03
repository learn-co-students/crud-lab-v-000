import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(res => <Restaurant key={res.id} restaurant={res} delete={this.props.delete} />)}
      </ul>
    );
  }
};

export default Restaurants;
