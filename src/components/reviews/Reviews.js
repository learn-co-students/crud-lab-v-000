import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId} = this.props;
    const mapReviews = reviews.filter(review => review.restaurantId === restaurantId);
    const reviews_list =      
      mapReviews.map((review, index) => {
      return <Review key={index} review={review} />
    })
  

    return (
      <ul>
        {reviews_list}
      </ul>
    );
  }
};

export default Reviews;