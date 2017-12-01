import React, { Component } from 'react';

class Review extends Component {
  handleDeleteClick(evt){
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={(evt)=>this.handleDeleteClick(evt)}>X</button>
      </li>
    );
  }
};

export default Review;
