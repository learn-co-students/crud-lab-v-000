import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ restaurant }) => ({ restaurant })

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_REVIEW", text }),
  // deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

