import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({

      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} value={this.state.text} type="text"/>
          <input type="submit" value="Create Review" />
          <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
