import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviewsList = () => this.props.reviews.map(review => <Review key={review.id} review={review} dispatch={this.props.dispatch} />)

  render() {
    return (
      <ul>
        {this.reviewsList()}
      </ul>
    );
  }
};

export default Reviews;
