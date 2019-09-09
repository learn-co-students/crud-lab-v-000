import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'

class Reviews extends Component {

  render() {
    console.log('in Reviews - this.props.reviews', this.props.reviews)

    const restaurantReviews = this.props.reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    })


    return (
      <ul>
        {restaurantReviews.map((review) => (
          <Review id={review.reviewId} key={review.reviewId} review={review} />
        )
        )}
      </ul>
    )
  }
}
// const mapStateToProps = ({ reviews }) ~> const reviews = state.reviews
// ({ reviews }) ~> (must return ab obj), {reveiws: reviews }
// const mapStateToProps = ({ reviews }) => ({ reviews })

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps)(Reviews)
