import React, { Component } from 'react';

class ReviewInput extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      text: "",
    }
}

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  } 

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("In handleSubmit review", event, this.props)
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})

    this.setState({ 
      text: "",
      })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Review:</h3>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
