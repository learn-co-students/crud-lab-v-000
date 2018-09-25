import React, { Component } from 'react';

class RestaurantInput extends Component {

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
		this.props.dispatch(this.state);
		this.setState({
			text: ''
		})
	}

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
      	Restaurant Name: <input type='text' onChange={event => this.handleChange(event)}/>
      	<input type="submit" />
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
