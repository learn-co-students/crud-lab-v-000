import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({text: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
