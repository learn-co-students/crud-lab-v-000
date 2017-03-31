import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {
  handleOnClick() {
    console.log('working')
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT', 
      id: this.props.id
    })
  }
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} <button onClick={() => this.handleOnClick()}>Delete</button></li>
        <ReviewInput store={this.props.store} restaurantId={this.props.id}/>
      </div>
    );
  }
};

export default Restaurant;