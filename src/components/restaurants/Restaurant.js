import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {

  handleClick = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.id
    })
  }


  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleClick} >x</button>
        <br />
        <ReviewInput />
      </li>
    );
  }
};

export default Restaurant;
