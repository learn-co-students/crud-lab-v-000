
import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        id: cuid(),
        restaurantId: this.props.restaurantId
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Review </label>
          <input type="text" onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
          <div>
            <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
          </div>
      </div>
    );
  }
};

export default ReviewInput;
