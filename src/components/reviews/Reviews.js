import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    const reviewsList = reviews.filter(review => review.restaurantId === restaurantId)
   console.log("rev", restaurantId)
    return (
      <ul>
        {reviewsList.map(rev => {return (<Review key={rev.id} review={rev.text} reviewId={rev.id} deleteReview={deleteReview}/>)})}
      </ul>
    );
  }
};

export default Reviews;
