import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'


class ReviewsContainer extends Component {


  render() {



    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} deleteReview = {this.props.deleteReview} id = {this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}


const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", payload: review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
