import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = event => {
    this.props.deleteReview(this.props.review.id);
  }

  render() {

    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
          <button onClick={e => this.handleOnClick(e)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
