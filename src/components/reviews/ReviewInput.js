import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    console.log(this.state.text);
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text,this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Review: <input type='text' onChange={this.handleChange}></input>
        <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
