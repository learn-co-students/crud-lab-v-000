import React, { Component } from 'react';

class Review extends Component {
	handleClick(e) {
		e.preventDefault();
		this.props.deleteReview(this.props.review.id);
	}
	render() {
		const { review } = this.props;
		// debugger;

		// console.log(this.props.review.text);
		return (
			<div>
				<li>
					{this.props.review.text}
					<button onClick={(e) => this.handleClick(e)}> X </button>
				</li>
			</div>
		);
	}
}

export default Review;
