import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
// import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/actionCreators'

class ReviewsContainer extends Component {
  render() {
    console.log('ReviewsContainer - this.props', this.props)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        {/* <Reviews reviews={this.props.reviews} /> */}
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   debugger
//   // console.log("ReviewContainer state", state)
//   // return {
//   // restaurantId: state.restaurant.id
// }
// const mapStateToProps = ({ reviews }) => ({ reviews })



export default connect(null, { addReview })(ReviewsContainer)
