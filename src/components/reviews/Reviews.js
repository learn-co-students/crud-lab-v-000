import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  displayReviews = () =>
    this.props.reviews().map((review, index) => (
      <li>
        <Review
          key={index}
          review={review}
          deleteReview={
            this.props.deleteReview
              ? this.props.deleteReview.bind(null, review)
              : ""
          }
        />
      </li>
    ));

  render() {
    return <ul>{this.displayReviews()}</ul>;
  }
}

export default Reviews;
