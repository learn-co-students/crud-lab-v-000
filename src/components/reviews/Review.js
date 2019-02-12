import React, { Component } from 'react';

class Review extends Component {
  reviewDelete = (event) => {
    debugger
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
          <button onClick={this.reviewDelete}> X </button>
        </li>

      </div>
    );
  }

};

export default Review;
