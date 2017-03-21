import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    var reviews = this.props.store.getState().reviews.filter(rev => rev.restaurantId === this.props.restaurantId)
    reviews = reviews.map((rev, index) => {
      return <Review key={index} review={rev} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
