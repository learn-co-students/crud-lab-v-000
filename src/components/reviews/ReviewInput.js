import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  text: '',
  	}
  }

  handleInput = (e) => {
  	this.setState({
  	  text: e.target.value,
  	})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
      	text: this.state.text,
      	restaurantId: this.props.restaurantId,
      }
    });

    this.setState({
      text: '',
    });
  }

  render() {

  	// debugger;
    return (
      <div>
      	<form onSubmit={(e) => this.handleSubmit(e)}>
      		<input type="text" onChange={this.handleInput} value={this.state.text} />
      		<input type="submit" />
      	</form>
      	<Reviews 
          store={this.props.store} 
          restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
