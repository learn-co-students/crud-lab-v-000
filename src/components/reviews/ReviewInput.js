import React, { Component } from 'react';
import Reviews from './Reviews';
import Restaurant from '../restaurants/Restaurant';
import Review from './Review';

class ReviewInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      text: ""
    }

  }

  handleReviewChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }

    })

    this.setState({
      text: '',
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
        <input 
        onChange={event => this.handleReviewChange(event)}/>
        <button type="submit"> Leave A Review  </button>
        </form>
        <Reviews 
        store={this.props.store}
        restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
};

export default ReviewInput;
