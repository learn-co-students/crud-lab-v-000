import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      }
    })
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
      <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Add Restaurant: </label>
        <input
        type="text" onChange={(event)=> this.handleOnChange(event)}/>
        value={this.state.text}
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;