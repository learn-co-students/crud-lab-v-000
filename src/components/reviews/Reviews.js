import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  // renderReviews = () => this.props.reviews.map((review, idx) => <Review key={idx} review={review} delete={this.props.delete}/>)

  render() {
    // console.log(this.props.reviews)
    return (
      <ul>
        {/* {this.renderReviews()} */}
      </ul>
    );
  }
};

export default Reviews;