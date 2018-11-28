import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id}  addReview={this.props.addReview} restaurant={this.props.restaurant}/>
	<Reviews restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview} /> 
      </div>
    )
  }
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

