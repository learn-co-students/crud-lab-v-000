import React, { Component } from 'react';

class Review extends Component {
	render() {
		const { review } = this.props;
		// debugger;
		return (
			<div>
				{review.text}
				<button> X </button>
			</div>
		);
	}
}

export default Review;
