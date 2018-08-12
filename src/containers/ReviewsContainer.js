// have restaurant as a prop here

// //{id: "cjkq5u8qv00003g5miegysgkx", text: "test"}
// id:"cjkq5u8qv00003g5miegysgkx"
// text:"test"

import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import { connect } from 'react-redux'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {


  render() {
    console.log(this.props.restaurant)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews
        restaurantId={this.props.restaurant.id}
        reviews={this.props.reviews}
        deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

 const mapStateToProps = ({reviews}) => ({reviews})

 const mapDispatchToProps = dispatch => ({
 addReview: review => dispatch({type: 'ADD_REVIEW', review}),
 deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})

 })

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer)
