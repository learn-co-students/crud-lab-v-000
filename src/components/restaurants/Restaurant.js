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
        <li>{this.props.restaurant.text}</li>
        <button onClick={this.handleOnClick} >Delete Restaurant</button>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
        <Reviews store={this.props.store}/>      
      </div>
    );
  }
};

export default Restaurant;