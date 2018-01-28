import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleOnClick(){
    debugger
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    
    return (
      <div>
        <li>
            {this.props.restaurant.text}
            <button onClick={(event) => this.handleOnClick(event)}>Delete </button>
            <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;