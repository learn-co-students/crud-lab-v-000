import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const theseReviews = this.props.store.getState().reviews.filter((r) => r.restaurantId === this.props.restaurantId )
    const reviewList = theseReviews.map((review, index) => {
      return <Review restaurantId={this.props.restaurantId} review={review} store={this.props.store} key={index}/>
    })

    return (
      <div>
        <ul>
          {reviewList} <br />
        </ul>
      </div>
    );
  }
};

export default Reviews;
