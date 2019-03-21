import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
 
  render() {
    const { addReview, restaurantId, deleteReview, reviews } = this.props
    return (
      <div>
        <ReviewInput 
          addReview={addReview} 
          restaurantId={restaurantId}
        />
     
        <Reviews 
          reviews={reviews}
          restaurantId={restaurantId}
          deleteRestaurant={deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviews }) =>  ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
