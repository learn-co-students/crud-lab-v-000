import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  reviewsForRestaurant = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews 
          restaurantId={this.props.restaurantId} reviewsForRestaurant={this.reviewsForRestaurant()} 
          deleteReview={this.props.deleteReview}  
        />
      </div>
    )
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => {
      dispatch({
        type: 'ADD_REVIEW',
        text: formData.text,
        restaurantId: formData.restaurantId
      })
    },
    deleteReview: id => {
      dispatch({
        type: 'DELETE_REVIEW',
        id: id
      })
    }
  }
}

const mapStateToProps = state => {
    return { reviews: [...state.reviews] };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
