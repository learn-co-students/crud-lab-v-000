import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => this.props.reviews.map(review => <Review key={review.id} review={review} delete={this.props.deleteReview}/>)

  render() {
    console.log(this.props.reviews)
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;