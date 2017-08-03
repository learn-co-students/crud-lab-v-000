import React, { Component } from 'react';

class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
  	const text = this.props.review.text
    return (
      <div>
        <li>{text}</li>
        <button onClick={() => this.handleOnClick()}>Delete</button>
      </div>
    );
  }

};

export default Review;