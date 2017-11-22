import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }
  
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}
          <button onClick={()=>this.handleOnClick()}>Delete Restaurant</button>
          <Reviews store={this.props.store} restaurantId={this.props.restaurant.id} />
        </li>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        <br />
      </div>
    );
  }
};

export default Restaurant;