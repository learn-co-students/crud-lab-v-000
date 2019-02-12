import React, { Component } from 'react';
// import Review from './Review';

class Reviews extends Component {
  handleDelete = id => {
    this.props.delete(id)
  }
  
  render() {
    const review = this.props.review;
    
    return (
      <li>
        {review.text} <button onClick={() => this.handleDelete(review.id)}>X</button>
      </li>
    );
  }
};

export default Reviews;