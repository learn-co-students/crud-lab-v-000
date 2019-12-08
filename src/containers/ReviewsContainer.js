import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput reviews={this.props.reviews}/>
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text) => {
      dispatch(addReview(text))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
