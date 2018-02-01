import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  };

  render() {
    
    return (
      <li>
        {this.props.restaurant.text}&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleOnClick}>Delete</button> <br/>

        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
      </li>
    );
  }
};

export default Restaurant;