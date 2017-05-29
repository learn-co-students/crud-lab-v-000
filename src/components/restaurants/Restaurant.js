import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleDelete(){
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
      <li>
        <p>
          {this.props.restaurant.text} <button onClick={() => this.handleDelete()}>Delete</button>
        </p>
        <p>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </p>
      </li>
      </div>
    );
  }
};

export default Restaurant;
