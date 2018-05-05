import React, { Component } from 'react';

class Review extends Component {
  
  handleDeleteReview = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }
  
  render() {
    return (
      <li key={this.props.key}>
        {this.props.review.text}
        <button onClick={this.handleDeleteReview} />
      </li>
    );
  }
};

export default Review;