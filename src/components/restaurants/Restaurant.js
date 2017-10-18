import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleOnClick = () =>{
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      restaurant: this.props.restaurant,
      id: this.props.restaurant.id,
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
          <button onClick={this.handleOnClick}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
