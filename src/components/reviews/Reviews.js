import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const restaurantReviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    }).map((review, index) => {
      return <Review key={index} text={review.text} store={this.props.store} review={review}/>
    })
    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;
