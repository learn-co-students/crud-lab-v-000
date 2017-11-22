import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // debugger; 

    const reviews = this.props.store.getState().reviews.filter((r,i)=>{ r.id === this.props.restaurant_id})

    return (
      <ul>
        <p>{reviews}</p>
      </ul>
    );
  }
};

export default Reviews;