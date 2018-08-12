// have restaurant as a prop here

// //{id: "cjkq5u8qv00003g5miegysgkx", text: "test"}
// id:"cjkq5u8qv00003g5miegysgkx"
// text:"test"

import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    console.log(this.props.restaurant)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
addReview: text => dispatch({type: 'ADD_REVIEW', text})

})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
