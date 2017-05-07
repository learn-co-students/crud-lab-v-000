import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((res) => <Restaurant store={this.props.store} key={res.id} restaurant={res} />)}
      </ul>
    );
  }
};

export default Restaurants;
