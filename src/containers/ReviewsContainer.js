import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => {
	return {
		addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
		delete: review => dispatch({ type: 'DELETE_REVIEW', review })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
