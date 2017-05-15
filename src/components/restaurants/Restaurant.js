import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'; 

class Restaurant extends Component {
  handleOnClick(event) {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT', 
      id: this.props.restaurant.id, 
    }); 
  }
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={(event) => this.handleOnClick(event)}>Delete Restaurant</button> 
        <ReviewInput store={this.store} restaurantId={this.props.restaurant.id}/>
      </div>
    );
  }
};

export default Restaurant;
