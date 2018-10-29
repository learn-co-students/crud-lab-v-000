import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props){
    super(props);
    this.state ={
      restaurantId: this.props.restaurantId,
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })

  }

  handleSubmit =(event) => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({ text: ''})
  }

  render() {
    return (
      <div>
        <label>Add Review:</label>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
