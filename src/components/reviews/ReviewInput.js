import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <input onChange={(e)=>this.handleOnChange(e)} type="text" value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
