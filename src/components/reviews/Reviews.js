import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((review, id) => <Review key={review.id} review={review} delete={this.props.delete}/>)}
      </ul>
    );
  }
};

export default Reviews;