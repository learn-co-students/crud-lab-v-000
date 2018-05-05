import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    };
  }
  
  handleOnReview = (event) => {
    this.setState({
      text: event.target.value,
    })
  }
  
  handleReviewSubmit = (event) => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_REVIEW', 
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      }
    });
    this.setState({
      text: '',
    });
    
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleReviewSubmit}>
          <input 
            type='text' 
            value={this.state.text} 
            onChange={(e) => this.handleOnReview(e)}/>
          <input type='submit'  />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
