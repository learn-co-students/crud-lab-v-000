import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

	state = {
		text: ''
	}

	handleChange(event){
		// event.preventDefault();
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.dispatch(this.state.text);
		this.setState({
			text: ''
		})
	}

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
      	Review text: <input type='text' onChange={event => this.handleChange(event)}/>
      	<input type="submit" />
      </form>
      </div>
    );
  }
};

export default ReviewInput;
