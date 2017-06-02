import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleOnChange(ev) {
    this.setState({ text: ev.target.value });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text,
      },
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          Add Review
          <input
            value={this.state.text}
            onChange={(ev) => this.handleOnChange(ev)} />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store}
          restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
