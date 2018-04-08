import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  handleClick () {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li>
        <h4>{this.props.restaurant.name}   ~   <button onClick={() => this.handleClick()}>Remove</button></h4>
        <ReviewInput id={this.props.restaurant.id} store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;
