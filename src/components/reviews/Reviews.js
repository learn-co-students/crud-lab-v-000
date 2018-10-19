import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => this.props.reviews.map ((review, id) => 
    <Review key={id} deleteReview={this.props.deleteReview} review={review} />)
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
