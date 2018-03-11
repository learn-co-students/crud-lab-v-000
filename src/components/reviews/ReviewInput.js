import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	constructor(){
		super()
		this.state = {
			text: ''
		}
	}

	handleChange(event){
		this.setState({
			text: event.target.value,
		})
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_REVIEW',
			text: this.state.text,
			restaurantId: this.props.restaurantId,
		})

		this.setState({
			text: ''
		})
	}
  render() {
    return (
      <div>
      	<Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
	    	<form onSubmit={(event) => this.handleSubmit(event)}>
	        <input type='text' onChange={(event) => this.handleChange(event)} value={this.state.text}/>
	        <input type='submit' />
	      </form>
      </div>
    );
  }
};

export default ReviewInput;
