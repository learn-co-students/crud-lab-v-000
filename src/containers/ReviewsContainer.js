import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { addR, deleteR, updateR, reviews, restaurantId } = this.props

    return (
      <div>
        <ReviewInput formMethod={addR}
                     restaurantId={restaurantId} />
        <Reviews reviews={reviews}
                 deleteR={deleteR}
                 updateR={updateR}
                 restaurantId={restaurantId} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addR: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteR: id => dispatch({ type: "DELETE_REVIEW", id }),
  updateR: review => dispatch({ type: "UPDATE_REVIEW", review })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
