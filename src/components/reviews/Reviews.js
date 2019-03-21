import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {

  render() {
  	
    const { reviews, restaurantId, deleteReview } = this.props
    const allReviews = reviews.filter(review => review.restaurantId === restaurantId)
   
    const restaurantReviews = allReviews.map(review =>
									  <Review key={review.id}
									   review={review}
									   deleteReview={deleteReview}
									  />
	)
    
    return (
        <ul>
          {restaurantReviews}
        </ul>
    )
  }
}

export default Reviews
