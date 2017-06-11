import React, { Component } from 'react';

class Review extends Component {

  handleOnClick(event) {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.review.text}</li>
        <button onClick={(event) => this.handleOnClick(event)}>Remove Review</button>
      </div>
    );
  }
};

export default Review;