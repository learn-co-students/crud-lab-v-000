import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props)
    // const { reviews, deleteReview } = this.props
    let resReviews = this.props.reviews.filter(review => this.props.restaurantId === review.restaurantId)

    let restaurantReviews = resReviews.map(review => <div key={review.id}><Review review={review} deleteReview={this.props.deleteReview}/></div>)
    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;