import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	handleOnChange = (event) => {
		this.setState({
			text: event.target.value
		});
	};
	handleOnSubmit = (event) => {
		event.preventDefault();

		// debugger;
		this.props.addReview({
			text: event.target.text.value,
			restaurantId: this.props.restaurantId
		});
		this.setState({
			text: ''
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					Review Input
					<input type="text" name="text" value={this.state.text} onChange={this.handleOnChange} />
					<input type="submit" name="submit" />
				</form>
			</div>
		);
	}
}

export default ReviewInput;
