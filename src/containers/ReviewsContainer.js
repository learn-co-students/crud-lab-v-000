import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { reviews, restaurant, addReview, deleteReview } = this.props
    const restaurantId = restaurant.id

    return (
      <div>
        <ReviewInput
          addReview={addReview}
          restaurantId={restaurantId}
         />
        <Reviews
          reviews={reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
   addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', payload: text, restaurantId: restaurantId }),
   deleteReview: (reviewId) => dispatch({type: 'DELETE_REVIEW', payload: reviewId })
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
