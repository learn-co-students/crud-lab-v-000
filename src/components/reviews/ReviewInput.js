import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: this.state,
      restaurantId: this.props.restaurantId,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store}
          restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
