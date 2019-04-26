import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <p>
            <span>Add Review </span>
            <input type='text' value={this.state.text} onChange={(event) => this.handleChange(event) } />
          </p>
            <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
