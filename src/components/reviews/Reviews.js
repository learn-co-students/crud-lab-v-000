import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => this.props.reviews && this.props.reviews.map((review) => <Review restaurantId={this.props.restaurantId} delete={this.props.delete} key={review.id} review={review} />)

  render() {
    console.log(this.props)
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
