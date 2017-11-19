import React, { Component } from 'react';

export default class Review extends Component {
  
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={() => this.handleDelete()}>x</button>
        </li>
      </div>
    )
  }
}

