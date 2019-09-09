import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/actionCreators'

class Review extends Component {

  handleOnClick = event => {
    console.log('in Review HOC 1- this.props', this.props)

    console.log('in Review HOC 2- this.props.review.reviewId', this.props.review.reviewId)
    this.props.deleteReview(this.props.review.reviewId)
  }

  render() {

    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default connect(null, { deleteReview })(Review)

