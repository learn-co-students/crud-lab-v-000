import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state ={
    text: ''
  }

  handleClick = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.review.text);
    this.setState({
      text: '',
    });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>New Review:</label>
          <input type="text" value={this.state.text} onChange={this.handleClick}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
