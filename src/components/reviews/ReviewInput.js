import React, { Component } from 'react';
import Reviews from './Reviews'
class ReviewInput extends Component {
  
  constructor(){
  	super()
  	this.state = {
  		text: ""
  	}
  }

  handleChange = (event) => {
    this.setState({
    	text: event.target.value
    })
  }

  handleSubmit = (event) => {
        event.preventDefault()
  	this.props.store.dispatch({type: "ADD_REVIEW", restaurantId: this.props.restaurantId, review: this.state.text})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurant={this.props.restaurant} />
      </div>
    );
  }
};

export default ReviewInput;
