import React, { Component } from 'react';

class Review extends Component {
  handleDelete = () => { this.props.deleteReview(this.props.review.id) }

  render() {
    return (
      <div>
        <li>
          Review: {this.props.review.text}
        </li>
        <button onClick={this.handleDelete}> Delete Review </button>
      </div>
    );
  }
};

export default Review;

// Users should also be able to delete a specific review.
