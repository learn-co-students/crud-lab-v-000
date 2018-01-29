import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnChange(event) {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={(event) => this.handleOnChange(event)}>REMOVE</button>

        <ReviewInput />
      </div>
    );
  }
};

export default Restaurant;
