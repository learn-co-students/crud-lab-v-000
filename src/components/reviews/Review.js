import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={() => this.props.deleteReview(this.props.review.id)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
