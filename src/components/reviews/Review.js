import React, { Component } from 'react';

class Review extends Component {

  handleDeleteClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleDeleteClick}> X </button>
      </div>
    );
  }

};

export default Review;
