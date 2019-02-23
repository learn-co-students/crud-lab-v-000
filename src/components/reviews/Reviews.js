import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((review) =>
          <Review delete={this.props.delete} key={review.id} review={review} restaurantId={review.restaurantId}/>
        )}
      </ul>
    );
  }
};

export default Reviews;
