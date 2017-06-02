import React, { Component } from 'react';

class Review extends Component {
  handleOnClick(ev) {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    });
  };

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={(ev) => this.handleOnClick(ev)}>Delete</button>
      </li>
    );
  }
};

export default Review;
