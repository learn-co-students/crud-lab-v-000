import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviews = this.props.reviews;
    const restaurantId = this.props.restaurantId;
    const deleteReview = this.props.delete;

    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId);
    const displayReviews = filteredReviews.map((review, index) => <Review delete={deleteReview} key={index} review={review}/>)

    return (
      <ul>
        {displayReviews}
      </ul>
    );
  }
};

export default Reviews;
