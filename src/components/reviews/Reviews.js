import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props)
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    console.log(associatedReviews)
    const reviewsCards = associatedReviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>)
    return (
        <ul>{reviewsCards}</ul>
    );
  }
};

export default Reviews;