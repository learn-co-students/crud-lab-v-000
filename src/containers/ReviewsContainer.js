import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../actions/reviews'

import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    console.log('reviewsContainter props:', this.props)

    const { reviews, restaurant, addReview, deleteReview } = this.props

    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} restaurantId={restaurant.id} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

export default connect(mapStateToProps, { addReview, deleteReview }) (ReviewsContainer)
 