import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      text: ''
    };
  }

  handleReviewChange(event){
    this.setState({
      text: event.target.value,
    });
  }

  handleReviewSubmit(event){
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
    });
  }

  render() {
    return (
      <div>
        <p>Reviews: </p>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/> 
        <form onSubmit={(event) => this.handleReviewSubmit(event)}> 
          <input type="text" value={this.state.text} onChange={(event) => this.handleReviewChange(event)} /> 
          <input type="submit" /> 
        </form> 
      </div>
    );
  }
};

export default ReviewInput;
