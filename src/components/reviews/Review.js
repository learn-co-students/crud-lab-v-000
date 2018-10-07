import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
      <span>
      {this.props.review.text}
      </span>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
