import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      restaurantId: this.props.restaurantId
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Add Review</label>
            <input type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        <div>
          <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
        </div>
      </div>
    );
  }
};

export default ReviewInput;
