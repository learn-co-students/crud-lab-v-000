import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <div>
        <Reviews store={ this.props.store } restaurantId={ this.props.restaurantId }/>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <input type='text' onChange={ e => this.handleChange(e) } value={ this.state.text } />
          <input type='submit' />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
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
};

export default ReviewInput;
