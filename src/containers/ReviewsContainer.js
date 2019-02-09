import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'


class ReviewsContainer extends Component {

  allReviews=()=>{
    if(this.props.reviews){
    return this.props.reviews.filter(review=>{
      return review.restaurantId == this.props.restaurantId
    })
  }
}

  render() {
    return (
      <div>
        {console.log(this.allReviews())}
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews deleteReview={this.props.deleteReview}  allReviews={this.allReviews()}/>
      </div>
    )
  }
}

const mapDispatchToProps= dispatch=>({
  addReview: review=> dispatch({type: 'ADD_REVIEW', review: review}),
  deleteReview: id=> dispatch({type: 'DELETE_REVIEW', id: id})
})

const mapStateToProps=(state)=>{
  return{
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
