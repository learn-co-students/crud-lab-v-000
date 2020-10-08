import React, { Component } from 'react';

class Review extends Component {

  render() {
    console.log(this.props)
    const { review } = this.props.review;

    return (
      <div>
        <li>
          {review}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.id)}> X </button>
      </div>
    );
  }

};

export default Review;
