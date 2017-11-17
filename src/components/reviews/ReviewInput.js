import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
