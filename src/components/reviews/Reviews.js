import React, { Component } from "react";
import Review from "./Review";
import cuid from "cuid";

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    const restaurantId = this.props.restaurantId;
    const restaurantReviews = reviews.filter(
      review => review.restaurantId === restaurantId
    );
    const renderedReviews = restaurantReviews.map(review => (
      <Review
        key={cuid()}
        review={review}
        deleteReview={this.props.deleteReview}
      />
    ));
    return <ul>{renderedReviews}</ul>;
  }
}

export default Reviews;
