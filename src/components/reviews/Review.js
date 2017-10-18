import React, { Component } from 'react';

class Review extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      review: this.props.review,
      id: this.props.review.id,
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text}
         <button onClick={() => this.handleOnClick()}/>
      </li>
    );
  }
};

export default Review;
