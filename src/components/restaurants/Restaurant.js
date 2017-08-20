import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    this.props.store.dispatch({
      type:'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>
          Description: {this.props.restaurant.text}
          <button onClick={this.handleDelete}>DELETE</button>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
