import React, { Component } from 'react'

import Review from './Review'

class Reviews extends Component {
  render () {
    const { store, restaurantId } = this.props
    const associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId)
    const reviews = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} restaurantId={review.restaurantId} store={store} />
    })

    return (
      <ul>
        { reviews }
      </ul>
    )
  }
}

export default Reviews
