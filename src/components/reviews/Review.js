import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      id: this.props.review.id,
      type: 'DELETE_REVIEW'
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleOnClick}>x</button>
      </li>
    );
  }
};

export default Review;
