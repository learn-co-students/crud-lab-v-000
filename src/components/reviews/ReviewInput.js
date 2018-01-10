import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {text: ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type: 'ADD_REVIEW', restaurantId: this.props.restaurantId, text: this.state.text })
    this.setState({ text: '' })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
      Add a review:
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <input value={this.state.text} onChange={(e) => {this.handleChange(e)}} type="text" />
        <input type="submit" />
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
