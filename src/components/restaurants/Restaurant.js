import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

export default class Restaurant extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    const { text, id } = this.props.restaurant;

    return (
      <div>
        <li>
          { text }
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewInput
            store={ this.props.store }
            restaurantId={ id } />
        </li>
      </div>
    );
  }
};
