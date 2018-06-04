import React, { Component } from 'react';
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = { text: '' }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      restaurantId: this.props.restaurantId
    });

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add review</label>
          <input value={this.state.text} onChange={this.handleChange} />
          <input type="submit"/>
        </form>

        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
