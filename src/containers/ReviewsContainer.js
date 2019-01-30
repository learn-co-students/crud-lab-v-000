import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

const mapDispatchToProps = dispatch => {
  return {
      addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
      deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)