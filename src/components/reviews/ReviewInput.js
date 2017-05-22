import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  processSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      },
    });
    this.setState({
      text: '',
    });
  }

  processChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.processSubmit(event)}>
          <label>Add Review</label>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.processChange(event)}
          />
          <input type="submit" />
        </form>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
