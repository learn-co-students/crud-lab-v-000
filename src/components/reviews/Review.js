import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';

class Review extends Component {

  render() {
    const { review, handleRemove } = this.props

    return (
      <li>
        <h3>Review for ...</h3>
        <p>{review.text}</p>
        <button onClick={() => handleRemove(review.id)}> X </button>
      </li>
    );
  }

};

export default Review;
