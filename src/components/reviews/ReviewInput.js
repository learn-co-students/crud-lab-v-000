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
        restaurantId: this.props.restaurantId,
        id: cuid()
      }
    })
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Review </label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
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
