import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    console.log('You clicked the x')
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={this.handleClick}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
