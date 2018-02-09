import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      id: this.props.restaurantId,
      text: this.state.text
    })
    this.setState({
      text: '',
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}
            type="text"
          />
          <input type="submit"/>
        </form>
        <Reviews
          restaurantId={this.props.restaurantId}
          store={this.props.store}
        />
      </div>
    );
  }
};

export default ReviewInput;
