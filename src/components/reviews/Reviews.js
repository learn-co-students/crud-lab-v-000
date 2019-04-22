import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviewList = filteredReviews.map((review, index) => {
          return <Review key={index} review={review} delete={this.props.delete} />
        })

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
