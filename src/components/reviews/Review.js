import React, { Component } from 'react';

class Review extends Component {
  
  handleDeleteReview = () => {
    
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