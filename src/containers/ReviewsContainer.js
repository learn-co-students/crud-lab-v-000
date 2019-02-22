import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review})
})

const mapStateToProps = state => {
  debugger
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
