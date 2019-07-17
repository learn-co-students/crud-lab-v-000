import React, { Component } from 'react';
//import { connect } from 'react-redux'
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

//debugger
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

//  console.log(container.html())

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Review Name"
              value={this.state.text}
              onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};


export default ReviewInput;
