import React, { Component } from 'react';

class ReviewInput extends Component {

	state = {
		text: ''
	}

	handleChange = event => {
		this.setState({
			text: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
		this.setState({
			text: ''
		});
	};

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        	<p><label>Add Review</label>
        	<input type="text"
        	 onChange={event => this.handleChange(event)}
        	 value={this.state.text} />  <button type="submit">Add</button>
        	 </p>
        	
        </form>
      </div>
    );
  }
};

export default ReviewInput;
