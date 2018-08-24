import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    // console.log('filteredReviews : ', filteredReviews);
    return filteredReviews.map((review, index) => <Review key={index} review={review} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview} />)

    // return filteredReviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />)
  }


  render() {
    // console.log('Reviews Props : ', this.props)
    // console.log('All reviews : ', this.props.reviews);

    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;