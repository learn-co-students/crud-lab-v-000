import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // const reviewsList = this.props.reviews.map(
    //   review => {if (review.restaurantId === this.props.restaurantId) {
    //     return <Review 
    //     key={review.id} 
    //     review={review} 
    //     delete={this.props.deleteReview}
    //     />
    //   }})

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} delete={deleteReview} />
    })

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;