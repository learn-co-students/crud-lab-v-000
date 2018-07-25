import React, { Component } from 'react';
import Review from './Review';

export default class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.reduce( (acc, rev) => {
      if (rev.restaurantId === this.props.restaurantId){
        acc.push( <Review review={rev} key={rev.id} store={this.props.store} /> );
      }
      return acc;
    }, [] );
    return (<ul>{reviews}</ul>);
  }
};
