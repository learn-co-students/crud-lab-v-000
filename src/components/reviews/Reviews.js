import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const reviews = this.props.store.getState().reviews.map(review =>
    {return <Review review={review} store={this.props.store} id={review.id} key={review.id}/>})
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
