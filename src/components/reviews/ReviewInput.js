import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text
      }
    })
    this.setState({
      text: ""
    })
  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
