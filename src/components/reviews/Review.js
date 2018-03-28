import React, { Component } from 'react';

class Review extends Component {
  handleClick = ()=> {
    this.props.store.dispatch({
                   type: 'DELETE_REVIEW', 
    						   id: this.props.review.id, 
    						   restaurantId: this.props.restaurantId
    })
  };

  render() {
    return (
      <li>
      	Name: {this.props.review.text} <button onClick={this.handleClick}>x</button>
      </li>
    );
  }
};

export default Review;