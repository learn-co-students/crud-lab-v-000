import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    const reviewsList = this.props.reviews.map(rev => {
      return (<Review key={rev.id} review={rev} deleteReview={this.props.deleteReview}/>)
    })
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
