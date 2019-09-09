import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId } = this.props

    const restaurantReviews = reviews.filter(review =>
      review.restaurantId === restaurantId
    )

    const restaurantReviewsArr = restaurantReviews.map((review, index) => {
      return < Review key={index} review={review} />
    })

    return (
      <div>
        <ul>{restaurantReviewsArr}</ul>
      </div >
    )
  }
}
// const mapStateToProps = ({ reviews }) ~> const reviews = state.reviews
// ({ reviews }) ~> (must return ab obj), {reveiws: reviews }
// const mapStateToProps = ({ reviews }) => ({ reviews })


export default Reviews
