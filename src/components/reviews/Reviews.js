import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <div>
        {this.props.reviews.map((review) => {
          return(
            <ul><Review key={review.id} review={review} deleteReview={this.props.deleteReview}/></ul>
          )
        })}
      </div>
    );
  }
};

export default Reviews;
