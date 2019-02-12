import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor() {
    super()
    this.state={
      text : ''
    }
  }

  reviewHandle = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  reviewSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state.text,this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.reviewSubmit}>
          <input type="text" onChange={this.reviewHandle} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
