import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {

  constructor(){
    super();
    this.state({
      reviews: [];
    })
  }

  handleClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }


  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleClick} >x</button>
        <br />
        <ReviewInput restaurant={this.props.restaurant} />
      </li>
    );
  }
};

export default Restaurant;
