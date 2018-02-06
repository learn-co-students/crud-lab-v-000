import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurantId: this.props.restaurantId,
      text: this.state
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Review</label>
          <input type='text' onChange={event => this.handleOnChange(event)} value={this.state.text}/>
          <input type='submit' />
        </form>
        <Reviews store={this.props.store} restaurant={this.props.restaurant} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
