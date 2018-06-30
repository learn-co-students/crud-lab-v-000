import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick =() => {
  	this.props.store.dispatch({
  		type: 'DELETE_RESTAURANT',
  		id: this.props.id
  	});
  }

  render() {
    return (
      <li>
      	{this.props.restaurant.text}
      	<button onClick={this.handleOnClick}>Delete</button>
        <p>Leave Review:</p>
      	<ReviewInput store={this.props.store} restaurantId={this.props.id} />
      </li>
    );
  }
};

export default Restaurant;