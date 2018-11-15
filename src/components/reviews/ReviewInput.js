import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state ={
    text: ''
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    });
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}>
          </input>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
