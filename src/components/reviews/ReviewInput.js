import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
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
     this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    })
    console.log(this.props)
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
