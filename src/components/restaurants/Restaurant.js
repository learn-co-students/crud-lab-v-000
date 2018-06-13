import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js'

class Restaurant extends Component {

  handleClick = (e) => {
  	this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }

  render() {
    return (
	   <li id={this.props.restaurant.id} key={this.props.key}>
	     <strong>{this.props.restaurant.text}</strong>
	     <button onClick={this.handleClick} > Delete </button>
       <ReviewInput store={this.props.store} restaurantId={ this.props.restaurant.id } key={this.props.restaurant.id}/>
	   </li>
    );
  }
};

export default Restaurant;