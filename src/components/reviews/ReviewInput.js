import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

handleOnSubmit = event => {
  event.preventDefault();
  const review = {text: this.state.text, restaurantId: this.props.restaurantId}
  this.props.addReview(review)
  this.setState({
    text: ''
  })
}
  render() {
    return (
      <div>
      Feel free to write a review about this restaurant <br></br>
      <br></br>
      <form onSubmit={this.handleOnSubmit}>
        <input type='text' 
               value= {this.state.text}
               onChange={this.handleOnChange} />
               <span> </span>
        <input type='submit'/>
      </form>
    </div>
    );
  }
};

export default ReviewInput;
