import React, { Component } from 'react';
import Restaurant from './Restaurant';

export default class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map(
      rest => <Restaurant restaurant={rest} key={rest.id} store={this.props.store} />
    );
    return (<ul>{restaurants}</ul>);
  }
};