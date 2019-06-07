import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, removeReview } = this.props;

    return (
      <ul>
        {reviews.map(review => {
          if (review.restaurantId === restaurantId) {
            return (
              <Review
                key={review.id}
                review={review}
                removeReview={removeReview}
              />
            );
          }
        })}
      </ul>
    );
  }
}

export default Reviews;
