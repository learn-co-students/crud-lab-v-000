import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { addReview, removeReview} from '../actions/reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews removeReview={this.props.removeReview} reviews={this.props.reviews} />

      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

export default connect(mapStateToProps,{ addReview, removeReview})(ReviewsContainer)
