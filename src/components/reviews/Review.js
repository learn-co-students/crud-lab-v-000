import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.delete(review.id)}>DELETE_REVIEW</button>
      </div>
    );
  }

};

export default Review;
