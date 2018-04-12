import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const reviews = filteredReviews.map((review, index) => {
      return <Review review={review} key={index} store={this.props.store} />
    })

    return (
      <div>
        <ul>
          { reviews }
        </ul>
      </div>
    );
  }
};

export default Reviews;
