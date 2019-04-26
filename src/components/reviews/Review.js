import React, { Component } from 'react';

class Review extends Component {

  render() {
    return (
      <div>
        <li>
          <span>{this.props.review.text} </span>
          <button onClick={() => this.props.deleteReview(this.props.review.id)} > X </button>
        </li>
      </div>
    );
  }

};

export default Review;
