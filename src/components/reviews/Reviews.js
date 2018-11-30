import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    const renderReviews = associatedReviews.map(review => {
      return (
        <Review
          key={review.id}
          review={review}
          delete={this.props.deleteReview}
        />
      );
    });

    return <ul>{renderReviews}</ul>;
  }
}

export default Reviews;
