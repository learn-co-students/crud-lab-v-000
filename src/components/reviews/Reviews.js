import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    let filteredReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );
    let reviews = filteredReviews.map((review, index) => {
      return (
        <Review
          restaurantId={this.props.restaurantId}
          key={index}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      );
    });

    return (
      <div>
        <ul>{reviews}</ul>
      </div>
    );
  }
}

export default Reviews;
