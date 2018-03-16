import React, { Component } from 'react';

class Review extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }
  render() {
    return (
      <li>
        {}
        <button onClick={(e) => this.handleOnClick(e)} value="X" />
      </li>
    );
  }
};

export default Review;
