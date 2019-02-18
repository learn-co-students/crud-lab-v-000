import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    if (reviews) {
      const filteredReviews = reviews.filter(
        review => review.restaurantId === restaurantId
      );
      const reviewList = filteredReviews.map((review, i) => {
        return <Review key={i} review={review} deleteReview={deleteReview} />;
      });
      return (
        <div>
          <ul>{reviewList}</ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Reviews;
