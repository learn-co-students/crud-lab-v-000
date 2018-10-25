import React, { Component } from 'react';

class Review extends Component {

  render() {

    return (
      <div>
        <li>
          { this.props.review.text }
        </li>
        <button> X </button>
      </div>
    );
  }

};

export default Review;
