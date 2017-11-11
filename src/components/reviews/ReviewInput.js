import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    // console.log(this.props.restaurantId)
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event)=>this.handleChange(event)}/>
          <button type="submit">Submit</button>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
