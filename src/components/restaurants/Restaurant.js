import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text} <br />
        <button onClick={this.handleOnClick} value="Delete Restaurant"/>
        <label>Reviews: </label>
        <Reviews store={this.props.store}/>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
