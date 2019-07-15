import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
 // i like my way better but cannot figure out how to get only the associated reviews
  // renderReviews = () => this.props.reviews && this.props.reviews.map((review) => <Review restaurantId={this.props.restaurantId} delete={this.props.delete} key={review.id} review={review} />)

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews && reviews.filter(review => review.restaurantId === restaurantId);
    const reviewList = associatedReviews && associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        Reviews:
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
