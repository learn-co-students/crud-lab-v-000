import React, { Component } from 'react';
import Reviews from '../reviews/Reviews';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleClick(event) {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}  <button onClick={(event) => this.handleClick(event)}>delete</button>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />

        </li>
      </div>
    );
  }
};

export default Restaurant;
