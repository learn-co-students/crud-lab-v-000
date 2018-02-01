import React, { Component } from 'react';

class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
    });
  }

  render() {
    let { text, id }  = this.props.review
    return (
      <li>
        {text}
        <button
          id={id}
          onClick={this.handleOnClick.bind(this)}
        />
      </li>
    );
  }
};

export default Review;
