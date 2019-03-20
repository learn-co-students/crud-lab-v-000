import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { reviews, addReview, deleteReview, restaurantId } = this.props;

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
    )
  }
}

const mapStateToProps = ({ reviews }) => {
  return  { reviews }
}

const mapDispatchToProps = dispatch => ({
 addReview: text => dispatch({ type: "ADD_REVIEW", text }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
