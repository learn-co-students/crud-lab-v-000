import React, { Component } from 'react';

class Review extends Component {

  handleClick = event => {
    this.props.deleteReview(this.props.review.id)
    }


  render() {
    debugger; 
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
