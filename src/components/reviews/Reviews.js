import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    // const { reviews, restaurantId, deleteReview } = this.props;

    const theRestaurantsReviews = this.props.reviews.filter(review => review.this.props.restaurantId === this.props.restaurantId);
 
    const reviewList = theRestaurantsReviews.map((review, index) => { 
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    });

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;