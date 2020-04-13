import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((review, idx) => (
          <Review review={review} delete={this.props.delete} key={idx} />
        ))}
      </ul>
    );
  }
}

export default Reviews;
