import React, { Component } from 'react';
import Reviews from './Reviews';

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

  handleSubmit = () => {
  	this.props.store.dispatch({type: "ADD_REVIEW", restaurantId: this.props.restaurant.id, text: this.state.text})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
