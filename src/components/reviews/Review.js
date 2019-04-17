import React, { Component } from 'react';

class Review extends Component {

  handleOnClickDelete = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button
          onClick={this.handleOnClickDelete}
        > X </button>
      </div>
    );
  }

};

export default Review;
