import React, { Component } from 'react';

class Review extends Component {

  state = {
      text: this.props.review.text
    }

handleChange = event => {
  this.setState({
    text: event.target.value
  })
}


  render() {
    const { review } = this.props
    console.log(this.state.text)

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.delete(review.id)}> X </button>
        <input type='text' onChange={this.handleChange} value={this.state.text}></input>
        <button onClick={() => this.props.update({...review, text: this.state.text})}> Update </button>
      </div>
    );
  }

};

export default Review;
