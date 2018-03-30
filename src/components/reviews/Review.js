import React, { Component } from 'react';

class Review extends Component {
  handleDelete = (e) => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  };

  render() {
    return (
      <li key={this.props.review.id}>
        {this.props.review.text}
        <button onClick={this.handleDelete}>Delete Review</button>
      </li>
    );
  }
};

export default Review;