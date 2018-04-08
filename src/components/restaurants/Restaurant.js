import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
// import Reviews from '../reviews/Reviews'

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
        <h3>{this.props.restaurant.text}   ~   <button onClick={() => this.handleClick()}>Remove</button></h3>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;

// <Reviews restaurantId={this.props.restaurant.id} store={this.props.store}/>
