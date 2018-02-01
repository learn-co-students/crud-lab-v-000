import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }

  render() {
    let { text, id } = this.props.restaurant;
    return (
      <li>
        {text}
        <ReviewInput store={this.props.store} restaurantId={id} />
        <button
          id={id}
          onClick={this.handleOnClick.bind(this)}
        />
      </li>
    );
  }
};

export default Restaurant;
