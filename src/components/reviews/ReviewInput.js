import React, { Component } from 'react';
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit }>
          <input
            onChange={ this.handleOnChange }
            type='text'
          />
          <button>Add Review</button>
        </form>
        <div className='reviews'>
          <Reviews 
            store={ this.props.store }
            restaurantId={ this.props.restaurantId }
          />
        </div>
      </div>
    );
  }
};

export default ReviewInput;
