import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
// import Restaurant from '../components/restaurants/Restaurant'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    console.log('ReviewsContainer - this.props', this.props)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />

        <Reviews />
      </div>
    )
  }
}

// const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({ type: "ADD_REVIEW", text })

  // addReview: () => dispatch({ type: "ADD_REVIEW", payload: { text: text, restaurantId: restaurantId } })
  // deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
})

export default connect(null, mapDispatchToProps)(ReviewsContainer)

// * find a way to pass restaurantId to ReviewInput? so input is associated
//* with a specific restaurant? 
//* Then pass id and text to add review?
//? how do i pass restaurnatId to dispatch?
//* I may not need restaurantID for adding review since it's nested.
//* render review and see
