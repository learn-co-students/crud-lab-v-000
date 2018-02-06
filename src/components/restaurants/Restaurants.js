import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map(rest =>
          <Restaurant restaurant={rest} key={rest.id} store={this.props.store} id={rest.id} /> )}
      </ul>
    );
  }
};

export default Restaurants;
