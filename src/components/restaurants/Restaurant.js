import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }
  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={(e) => this.handleOnClick(e)} value="X" />
        <ReviewInput
          restoId={this.props.restaurant.id}
          store={this.props.store}/>
      </li>
    );
  }
};

export default Restaurant;
