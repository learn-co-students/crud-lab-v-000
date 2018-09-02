import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Text: </label>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
