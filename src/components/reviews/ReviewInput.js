import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

	constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  changeReviewText = (e) => {
  	this.setState({text: e.target.value})
  }

  handleReviewSubmit=(event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=> this.handleReviewSubmit(event)} >
        add a review here: 
    	  <input type="text" value={this.state.text} onChange={(e) => this.changeReviewText(e)}/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    )
  }



};

export default ReviewInput;
