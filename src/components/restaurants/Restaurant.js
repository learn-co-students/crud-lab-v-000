import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  
  handleOnClick = e => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  
  render() {
    const {text, id} = this.props.restaurant
    
    return (
      <div>
        <li>
          {text}
          <button
            onClick={e => this.handleOnClick(e)}>
            Delete
          </button>
          <ReviewInput
            store={this.props.store}
            restaurantId={id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;