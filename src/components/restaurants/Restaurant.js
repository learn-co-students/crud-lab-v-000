import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';


class Restaurant extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }


  render() {
    return (
    <div>
      <li>
        Restaurant name: { this.props.restaurant.text }
        <br></br>
        <button onClick={() => this.handleOnClick()}>DELETE RESTAURANT</button>
        <br></br>
        <br></br>
        Review this restaurant: <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    </div>
    );
  }
};

export default Restaurant;
