import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
          />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          updateReview={this.props.updateReview}
          deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: review => dispatch({type: 'DELETE_REVIEW', review}),
    updateReview: updatedReview => dispatch({type: 'UPDATE_REVIEW', updatedReview})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
