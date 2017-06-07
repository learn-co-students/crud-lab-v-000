import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <li>
        { this.props.review.text }
        <button onClick={ e => this.handleClick() }>Delete Review</button>
      </li>
    );
  }

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
};

export default Review;