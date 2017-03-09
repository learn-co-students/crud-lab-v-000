import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.id
    })
  }

  render(){
    return(
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleOnClick.bind(this)}>X</button>
          <ReviewInput store={this.props.store} restaurantId={this.props.id} />
        </li>
      </div>
    )
  }
}

export default Restaurant
