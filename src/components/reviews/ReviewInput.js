import React, { Component } from 'react';
class ReviewInput extends Component {
  state = {
    text: ""
  }
  //receives restaurantId and addReview in props

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  //const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ""
    })
  }
  //saving review to store 

  render() {
    
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Review:</label>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
        
      </div>
    );
  }

};


export default ReviewInput;
