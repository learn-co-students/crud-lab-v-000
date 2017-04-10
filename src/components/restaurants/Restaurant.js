import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} <button onClick={()=>this.handleClick()}>Delete</button></li>
        <br />
        <ReviewInput restaurant={this.props.restaurant} />
        <p><strong>Reviews</strong></p>
      </div>
    );
  }
};

export default Restaurant;
