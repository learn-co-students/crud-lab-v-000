import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const allReviews = this.props.reviews
    let reviews;
    console.log('allReviews:', allReviews);

    if(allReviews) {
      reviews = allReviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => <Review key={review.id} review={review}/>)
    }

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;