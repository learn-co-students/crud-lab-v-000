import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import Review from '../components/reviews/Review'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  // renderReviews = () => this.props.reviews.map((review, id) =>
  //   <Review key={id} text={review} />)

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    reviews: state.reviews
});

//debugger
const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
