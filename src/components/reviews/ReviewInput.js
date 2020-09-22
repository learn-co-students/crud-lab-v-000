import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h4>Review Input</h4>
          <input 
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
        
      </div>
    );
  }
};

export default ReviewInput;
