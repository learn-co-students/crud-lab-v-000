import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    addReview: FormData => {
      dispatch({
        type: 'ADD_REVIEW',
        text: FormData // or perhaps formData.text
      })
    }
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
