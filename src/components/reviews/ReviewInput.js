import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()

    this.props.store.dispatch({
      type: "ADD_REVIEW",
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
