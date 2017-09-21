import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} <button onClick={this.handleOnClick}>Delete</button></li>
        <ReviewInput restaurant={this.props.restaurant} store={this.props.store} />
        <Reviews restaurant={this.props.restaurant} store={this.props.store}/>
      </div>
    );
  }
};

export default Restaurant;
