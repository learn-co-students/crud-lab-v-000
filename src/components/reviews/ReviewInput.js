import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  handleSubmit = event => {
    debugger
    event.preventDefault();
    this.props.addReview(this.state.text)
    this.setState({text: ''})
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
    	    <label>Review: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default ReviewInput;
