import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    }, () => console.log(this.state.text))
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      id: this.props.restaurantId, 
      text: this.state.text
    })
  }

  render() {

    //let reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button>Submit Review</button>
          <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
