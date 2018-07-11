import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleOnChange = event => this.setState({ text: event.target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      }
    })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Review</label><br></br>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.text}
          />
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
