import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
      restaurantId: props.restaurantId
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
      review: {
        text: this.state.text,
        restaurantId: this.state.restaurantId
      }
    })
    
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </form>
    );
  }
};

export default ReviewInput;
