import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  handleDeleteReview = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    })
    debugger;
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={() => this.handleDeleteReview()}/>
      </li>
    );
  }
};

export default Review;
