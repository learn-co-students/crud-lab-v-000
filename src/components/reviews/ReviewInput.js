import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  handleOnChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }
  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
