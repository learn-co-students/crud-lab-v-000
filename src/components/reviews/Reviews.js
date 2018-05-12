/* eslint-disable */

import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews= this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const showReviews = reviews.map((review, index) =>{
      return <Review key={index} review={review} store={this.props.store}/>
    })

    return (
      <ul>
        {showReviews}
      </ul>
    );
  }
};

export default Reviews;