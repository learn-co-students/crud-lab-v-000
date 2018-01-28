import React, { Component } from 'react';

class Review extends Component {

  handleClick = (e) => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    })
  }

  render() {
    const { text } = this.props.review;
    return (
      <div>
        <li>
          {text}
        </li>
        <button onClick={this.handleClick}>Delete Review</button>
      </div>
    );
  }
};

export default Review;
