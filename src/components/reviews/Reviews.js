import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    console.log(restaurantReviews)
    const renderReviews = () => {
      return (
        restaurantReviews.map((review, i) => {
          return (
            <Review review={review} key={i} delete={this.props.deleteReview} />
          )
        })
      )
    }
    return (
      <ul>
        {renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
