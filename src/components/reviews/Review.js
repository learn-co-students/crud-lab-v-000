import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text}<br></br>
        <button onClick={this.handleOnClick.bind(this)}>Delete Review</button>
      </li>
    );
  }
};

export default Review;