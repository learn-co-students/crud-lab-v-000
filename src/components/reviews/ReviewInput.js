import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review Text</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
