import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleReviewSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleReviewSubmit(e)}>
          <input type="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
