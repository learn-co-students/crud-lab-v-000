import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

const ReviewsContainer = props => {

    return (
      <div>
        <ReviewInput restaurantId={props.restaurant.id}  addReview={props.addReview} restaurant={props.restaurant}/>
	<Reviews restaurantId={props.restaurant.id} restaurant={props.restaurant} reviews={props.reviews} deleteReview={props.deleteReview} /> 
      </div>
    )

}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
 addReview: review => dispatch({ type: "ADD_REVIEW", review }),
 deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', id: reviewId })
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReviewsContainer)

