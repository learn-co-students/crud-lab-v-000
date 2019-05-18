import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}
          {this.props.review.text}
          <button onClick={() => this.props.deleteReview(this.props.review.id)}>DELETE</button>
        </li>
      </div>
    );
  }

};

export default Review;
