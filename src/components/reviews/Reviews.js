import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

	handleOnClick = () => {
	  this.props.store.dispatch({
	    type: 'DELETE_REVIEW',
	    id: this.id,
	  });
	}

  render() {

  	const reviews = this.props.store.getState().reviews.map((review, index) => {
  		if(review.restaurantId === this.props.restaurantId) {
      		return <Review review={review} restaurantId={this.props.restaurantId} key={index} store={this.props.store}></Review>
    	}
    });

    return (
      <div>
      	<ul>
       		{reviews}
       		<button onClick={() => this.handleOnClick()}>Delete</button>
      	</ul>
      </div>
    );
  }
};

export default Reviews;