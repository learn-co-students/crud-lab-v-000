import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  
  render() {

    let restaurantReviews = this.props.reviews.filter( review => review.restaurantId === this.props.restaurant.id)
    

    console.log(restaurantReviews)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews 
          restaurantReviews={restaurantReviews} 
          restaurant={this.props.restaurant}
          deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ( {reviews} ) => ( {reviews} )

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', text, restaurantId}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
