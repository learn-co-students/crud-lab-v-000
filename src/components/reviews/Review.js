import React, { Component } from 'react';

class Review extends Component {

  handleClick = (e) => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }


  render() {
    return (
      <div>
        <li key={this.props.review.id}>{this.props.review.text}</li>
        <button type="button" onClick={this.handleClick}>x</button>
      </div>
    );
  }
};

export default Review;
