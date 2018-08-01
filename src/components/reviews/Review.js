import React, { Component } from 'react';

export default class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={() => this.handleOnClick()}>Delete</button>
      </li>
    );
  }
};