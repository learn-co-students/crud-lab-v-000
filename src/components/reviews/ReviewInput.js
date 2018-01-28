import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from './Review'

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  handleOnChange(event){
    // debugger
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    debugger
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(event) => this.handleOnChange(event)}/>
        <input type="submit" onClick={(event) => this.handleSubmit(event)}/>
      
      <Reviews store={this.props.store} resturantId={this.props.resturantId}/>
      </div>
    );
  }
};

export default ReviewInput;
