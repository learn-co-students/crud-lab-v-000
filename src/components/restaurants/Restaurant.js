import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  onDeleteClick = () => {
    this.props.store.dispatch(
      {
        type: 'DELETE_RESTAURANT',
        id: this.props.restaurant.id,
      }
    )
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.onDeleteClick} >Delete</button>
        </li>
        <div>
          <h4>Submit A Review</h4>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </div>
      </div>
    );
  }
};

export default Restaurant;