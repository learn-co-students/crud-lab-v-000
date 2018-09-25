import React, { Component } from 'react';

class Review extends Component {

  handleDelete = (event) => {
    event.preventDefault();
      this.props.delete(this.props.review.id)
    }

  render() {
    const review = this.props.review

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={id => this.handleDelete(id)}> X </button>
      </div>
    );
  }

};

export default Review;
