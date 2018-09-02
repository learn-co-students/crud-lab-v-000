import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.actions.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} 
        delete={this.props.actions.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		reviews: state.reviews
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: {
		addReview: review => dispatch({type: "ADD_REVIEW", review}),
		deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
