import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    const { text, id } = this.props.restaurant;

    return (
      <div>
        <li>{text}</li>
        <button onClick={this.handleClick} > Delete</button>
        <ReviewInput 
          store={this.props.store}
          restaurantId={id}
        />
      </div>
    );
  }
};

export default Restaurant;