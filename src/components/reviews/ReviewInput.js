import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(this.props)
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
    // console.log(this.props)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}></input><br/>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
