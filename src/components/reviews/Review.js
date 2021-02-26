import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
