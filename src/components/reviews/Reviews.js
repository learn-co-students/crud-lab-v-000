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
        return (
          <Review
            restaurantId={restaurantId}
            key={i}
            review={review}
            reviews={reviews}
            deleteReview={deleteReview}
            updateReview={this.props.updateReview}
          />
        );
      });
      return (
        <div>
          <ul style={{ listStyleType: "none" }}>{reviewList}</ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Reviews;
