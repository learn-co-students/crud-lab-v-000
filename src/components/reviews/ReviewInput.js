import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state={
      text: ''
    }
  }
  handleReviewChange(evt){
    this.setState({
      text: evt.target.value
    })
  }
  handleSubmit(evt){
    evt.preventDefault()
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
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <input type="text" value={this.state.text} onChange={(evt)=>this.handleReviewChange(evt)}/>
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
