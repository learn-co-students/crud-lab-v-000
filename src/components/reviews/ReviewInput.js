import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_REVIEW', review: {text: this.state.text, restaurantId: this.props.restaurantId}})
    this.setState({
      text: ''
    })
  }

  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input type="text" onChange={this.handleChange} value={this.state.text}/>
       <input type="submit"/> {this.state.text}
       <Reviews restaurantId={this.props.restaurantId} store={this.props.store} reviews={this.state.reviews}/>
      </form>
    );
  }
};

export default ReviewInput;
