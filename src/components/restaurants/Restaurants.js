import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    return(
      <ul>
        {this.props.restaurants.map(r=><Restaurant delete={this.props.delete} key={r.id} restaurant={r}/>)}
      </ul>
    );
  }
};

export default Restaurants;