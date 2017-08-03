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
  	const { text, id } = this.props.restaurant;
  	const store = this.props.store
    return (
      <div>
       <li>
          {text}
          <button onClick={() => this.handleOnClick()}> Delete </button>
          <ReviewInput restaurantId={id} store={store} />
        </li>
      </div>
    );}};

export default Restaurant;