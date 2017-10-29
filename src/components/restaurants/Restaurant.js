import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }
  render() {
    const { text, id } = this.props.restaurant
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick} />
          <ReviewInput store={this.props.store} restaurantId={id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
