import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		}
	}

  	handleSubmit = (e) => {
		e.preventDefault();
		const sendReview = { text: this.state.text, restaurantId: this.props.restaurantId }
		//console.log('sending review: ', sendReview)
		this.props.addReview(sendReview)
		this.setState({
			...this.state,
			text: '',
		})
	}

	handleChange = e => {
		this.setState({
			text: e.target.value
		})
	}

  render() {
	
	
    return (
      <div>
        <form
			onSubmit={ e => this.handleSubmit(e) }
        >
        	<input 
        		type="text"
        		value={this.state.text}
        		onChange={ e => this.handleChange(e)} />

        </form>
      </div>
    );
  }
};

export default ReviewInput;
