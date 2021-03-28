import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.props)
    const review = {restaurantId: this.props.restaurantId, text: this.state.text}
    this.props.addReview(review);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" name="text" onChange={this.onChange} value={this.state.text}/>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
