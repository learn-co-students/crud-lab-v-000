import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState( { text: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text
      }
    })
    this.setState({ text: '' })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <button>Add Review</button>
        </form>
        <div>
          <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        </div>
      </div>
    );
  }
};

export default ReviewInput;
