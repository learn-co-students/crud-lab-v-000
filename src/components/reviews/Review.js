import React, { Component } from 'react';

class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <li>
        <span>{this.props.review.text}</span><button onClick={() => this.handleOnClick()}>DELETE</button>
        </li>
    );
  }
};

export default Review;