import React, { Component } from 'react';

class Review extends Component {
  handleDelete = () => {
    // event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  render() {
    return (
      <li>
        <button onClick={this.handleDelete} >Delete</button>
        {this.props.review.text}
      </li>
    );
  }
};

export default Review;
