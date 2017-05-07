import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    const { id, text } = this.props.restaurant;

    return (
      <div>
        <li>
          {text} || <button onClick={() => this.handleClick()}>X</button>
          <ReviewInput
              store={this.props.store}
              restaurantId={id}
          />
        </li>

      </div>
    );
  }
};

export default Restaurant;
