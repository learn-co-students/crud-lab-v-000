import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return{
    addReview: (text,restaurantId) => dispatch({type: 'ADD_REVIEW', text: text, restaurantId: restaurantId}),
  }
}

export default connect(null,mapDispatchToProps)(ReviewsContainer)
