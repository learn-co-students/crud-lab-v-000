import React, { Component } from 'react';

class Review extends Component {

  onClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.onClick}> X </button>
      </div>
    );
  }

};

export default Review;
