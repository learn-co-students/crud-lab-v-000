import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      restaurantId: this.props.restaurantId,
      text: this.state.text
    })
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <input type="text" value={this.state.text} onChange={(e)=>this.handleChange(e)} />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
