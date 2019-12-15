import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/reviews';
import { deleteReview } from '../actions/reviews';


class ReviewsContainer extends Component {

  render() {
  	console.log(this.props)
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} reviews={this.props.reviews} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text) => {
      dispatch(addReview(text))
    },
    deleteReview: (id) => {
      dispatch(deleteReview(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
