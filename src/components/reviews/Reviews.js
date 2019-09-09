import React, { Component } from 'react';
import Review from './Review';
// import { connect } from 'react-redux'

class Reviews extends Component {

  render() {
    const { reviews, restaurantId } = this.props

    const restaurantReviews = reviews.filter(review => {
      // console.log('in restaurantReviews', review);

      return review.restaurantId === restaurantId
    })

    const restaurantReviewsArr = restaurantReviews.map((review, index) => {
      console.log(review)
      console.log(index)

      return < Review key={index} review={review} />
    }
    )

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
