import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      text: this.state.text,
      restaurantId: this.props.restaurantId

    })
    this.setState({
      text: ""
    })
    // this would be saving a review to the restaurant
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
          <button type='submit'>Submit</button>
          <li><Reviews store={this.props.store} restaurantId={this.props.restaurantId}/></li>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
