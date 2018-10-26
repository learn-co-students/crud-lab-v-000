import React from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'


const ReviewsContainer = props => {
    return (
      <div>
        <ReviewInput
          reviews={props.reviews}
          addReview={props.addReview}
          deleteReview={props.deleteReview}
          restaurantId={props.restaurantId}
        />
        <Reviews
          reviews={props.reviews}
          addReview={props.addReview}
          deleteReview={props.deleteReview}
          restaurantId={props.restaurantId}
        />
      </div>
    )
}

export default ReviewsContainer
