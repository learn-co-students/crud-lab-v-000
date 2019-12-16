import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    return (
      <div>
        <li key="review.id">
          {review.text}
           <button onClick={() => this.props.delete(review.id)}>DELETE_REVIEW</button>
        </li>
      </div>
    );
  }

};

export default Review;


