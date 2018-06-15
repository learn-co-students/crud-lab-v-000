import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });
    this.setState({
      text: '',
    });
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.handleOnSubmit(e)}>
          <input type="text"  value={this.state.text} onChange={(e) => this.handleOnChange(e) } />
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
