import React, { Component } from 'react';

class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.id
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={() => this.handleOnClick()}> X </button>
      </div>
    );
  }

};

export default Review;
