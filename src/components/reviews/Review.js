import React, { Component } from 'react'

class Review extends Component {
  handleClick (e) {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  render () {
    return (
      <li>
        {this.props.review.text}
        <button onClick={(e) => { this.handleClick(e) }} />
      </li>
    )
  }
};

export default Review
