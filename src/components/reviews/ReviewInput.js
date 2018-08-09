import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={event => this.handleOnSubmit(event)}>
            <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
};

export default ReviewInput;
