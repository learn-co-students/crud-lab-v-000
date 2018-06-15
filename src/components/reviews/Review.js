import React, { Component } from 'react';

class Review extends Component {

  deleteReview = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        Delete Review Button: <button onClick={() => this.deleteReview()} />
      </li>
    );
  }
};

export default Review;
