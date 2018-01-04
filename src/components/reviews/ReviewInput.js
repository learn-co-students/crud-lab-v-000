import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      },
    });
    this.setState({
      text: ''
    });
  }

  handleOnChange = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChange(event)}/>
        <input type="submit"/>
      </form>
      <Reviews store={this.props.store} id={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
