import React, { Component } from 'react';

class Review extends Component {
	handleOnDeleteReview = () => {
		this.props.store.dispatch({
			type: 'DELETE_REVIEW',
			id: this.props.review.id
		})
	}

  render() {
    return (
    	<div>
      	<li>{this.props.review.text}</li>
      	<button onClick={this.handleOnDeleteReview}>Delete</button>
      </div>
    );
  }
};

export default Review;

