import React, { Component } from 'react'

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    const handleOnClick = event => {
      this.props.deleteReview(review.id)
    }

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={handleOnClick}> x </button>
      </div>
    )
  }

}

export default Review
