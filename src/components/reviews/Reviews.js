import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => {
          if (review.restaurantId === this.props.restaurantId) {
            return (
              <Review
                key={review.id}
                review={review}
                restaurantId={review.restaurantId}
                delete={this.props.delete}
              />
            )
          }
        })}
      </ul>
    );
  }
};

export default Reviews;
