import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

  
    const theRestaurantsReviews = this.props.reviews.filter(review => this.props.review.restaurantId === this.props.restaurantId);
 
    const reviewList = theRestaurantsReviews.map((review, index) => { 
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    });
    console.log(reviewList);
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;