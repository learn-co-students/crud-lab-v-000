import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const theseReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const listReviews = theseReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <ul>
        {listReviews}
      </ul>
    );
  }

};

export default Reviews;
