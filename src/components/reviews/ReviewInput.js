import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      restaurantId: this.props.restaurantId
    });
    this.setState({
      text: '',
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Review Input</label>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
