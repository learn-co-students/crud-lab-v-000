import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
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
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
  }

  render() {
    debugger;
    let reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <div>
      Write a review:
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>

      Existing reviews:
        <Reviews reviews={reviews}/>
      </div>
    );
  }
};


export default ReviewInput;
