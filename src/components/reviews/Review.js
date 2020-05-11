import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props


    return (
      <div>
        <li>

          {review.text}
        </li>
        <button onClick={() => this.props.delete(review.id)}> X </button>
        <input type='text'></input>
        <button onClick={() => this.props.update(review)}> Update </button>
      </div>
    );
  }

};

export default Review;
