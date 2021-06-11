import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  


  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId);
    const reviewsAll= restReviews.map( (review,index)=> {
          return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
           {reviewsAll}
      </ul>
    );
  }


};

export default Reviews;