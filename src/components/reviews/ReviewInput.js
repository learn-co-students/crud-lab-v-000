import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTyping = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review: </label>
          <input type="text" onChange={this.handleTyping} value={this.state.text}/>
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
