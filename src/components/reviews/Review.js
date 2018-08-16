import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    debugger

    return (
      <span>
        <li>
          {review.text}
          <button 
            onClick={id => this.props.deleteReview(review.id)}
          >
            X 
          </button>
        </li>
      </span>
    );
  }

};

export default Review;
