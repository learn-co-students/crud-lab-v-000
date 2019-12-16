import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId} = this.props;

    const ifAssoc = reviews.filter(review => review.restaurantId === restaurantId);

    const renderReviews = ifAssoc.map((review) => {
      return <Review key={review.id} review={review} delete={this.props.deleteReview} />
   })

    return (
      <ul>
        Reviews
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;