import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick(e) {
     const id = this.props.restaurant.id
     this.props.store.dispatch({
       type: 'DELETE_RESTAURANT',
       id: id
     })
  }

  render() {
    return (
      <li>
      {this.props.restaurant.text} <br />
      <button onClick={(event) => this.handleClick(event)}>Delete Me!</button> <br /><br />
      <ReviewInput restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} store={this.props.store} /> <br />
      _____________________________________________________ <br /><br />
      </li>
    );
  }
};

export default Restaurant;
