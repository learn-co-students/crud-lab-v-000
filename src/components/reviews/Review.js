import React, { Component } from 'react';

class Review extends Component {

  state = {
      text: this.props.review.text
    }

  render() {
    const { review } = this.props


    return (
      <div>
        <li>

          {review.text}
        </li>
        <button onClick={() => this.props.delete(review.id)}> X </button>
        <input type='text'></input>
        <button onClick={() => this.props.update({id: review.id, text: this.state.text})}> Update </button>
      </div>
    );
  }

};

export default Review;
