import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text} <br />
        <button onClick={this.handleOnClick} value="Delete Review"/>
      </li>
    );
  }
};

export default Review;
