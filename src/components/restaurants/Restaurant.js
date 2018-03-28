import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';


class Restaurant extends Component {
  
  handleClick = (e)=> {
  	this.props.store.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }

  render() {
    return (
      <div>
	    <li>
	    	name: {this.props.restaurant.text} <button onClick={this.handleClick}>x</button>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
	    </li>
      </div>
    );
  }
};

export default Restaurant;