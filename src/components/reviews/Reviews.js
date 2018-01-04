import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviews = this.props.reviews.map((review, index)=> <Review key={index} store={this.props.store} review={review} />)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;