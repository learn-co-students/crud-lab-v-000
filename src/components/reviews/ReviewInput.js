import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	state = {
		text: ''
	}
  
	handleSubmit = event => {
		event.preventDefault();
		this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id})
		this.setState({
			text: ''
		})
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}


  render() {
    return (
      <div>
      	Add a Review:
        <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
