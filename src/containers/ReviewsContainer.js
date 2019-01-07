import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        {/* pass restaurantId down via props to allow filtering reviews specific to restaurant */}
        <Reviews reviews={this.props.reviews} delete={this.props.delete} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  };
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  // careful with specifying the params of dispatch: here, id will correspond to action.id, to be set to the argument of delete
  delete: id => dispatch({type: 'DELETE_REVIEW', id })
})

export default connect (mapStateToProps, mapDispatchToProps)(ReviewsContainer)
