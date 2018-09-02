import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    handleOnClick = () => {
      this.props.deleteReview(this.props.review.id)
    }

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Review;
