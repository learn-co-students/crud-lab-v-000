import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const temprev = this.props.reviews.filter(review => review.restaurantId === this.props.id)
    const filteredrevs = temprev.map((review, id) => <Review delete={this.props.deleteReview} key={review.id} review={review} />)
    return (
      <ul>
        {filteredrevs}
      </ul>
    );
  }
};

export default Reviews;
