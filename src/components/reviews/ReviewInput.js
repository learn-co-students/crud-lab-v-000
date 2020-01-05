import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
       <input type="text" onChange={this.handleOnChange} value={this.state.text}></input>
       <input type ="submit"/>
      </form>
    );
  }
};

export default ReviewInput;
