import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
    <ReviewInput addReview={this.props.addReview} />
    <ReviewInput reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>

      </div>
    )
  }
}
const mapStateToProps = ({ state }) => (console.log(state))
// ({reviews: state.reviews})
 
const mapDispatchToProps = dispatch => ({
  
  addReview: text => dispatch({ type: "ADD_REVIEW", text}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
 })

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer)
