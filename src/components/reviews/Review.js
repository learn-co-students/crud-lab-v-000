import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  
  render() {
    return (
      <li>
      <button onClick={this.handleOnClick}>{this.props.review.text}</button>
      </li>
    );
  }
};

export default Review;