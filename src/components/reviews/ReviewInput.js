import React, { Component } from 'react';
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor(){
    super()
    this.state ={
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({text:''})
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.text}
                 onChange={event=> this.setState({text: event.target.value})}
                 />
          <button>Add Review</button>
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
