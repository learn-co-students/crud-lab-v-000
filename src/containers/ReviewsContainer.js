import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} delete={this.props.delete} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
	addReview: (text, restaurantId) => dispatch({ type: 'ADD_REVIEW', review: {text: text, restaurantId: restaurantId} }),
	delete: id => dispatch ({type: "DELETE_REVIEW", id }) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
