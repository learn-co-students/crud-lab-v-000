import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
