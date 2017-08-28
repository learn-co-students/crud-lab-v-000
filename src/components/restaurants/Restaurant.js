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
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
        <button onClick={() => this.handleOnClick()} />
      </div>
    );
  }
};

export default Restaurant;