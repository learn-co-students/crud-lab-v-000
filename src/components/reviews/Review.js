import React, { Component } from 'react';

class Review extends Component {

  handleDelete = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          { this.props.review.text }
        </li>
        <button onClick={ () => this.handleDelete() }>DELETE</button>
      </div>
    );
  }

};

export default Review;
