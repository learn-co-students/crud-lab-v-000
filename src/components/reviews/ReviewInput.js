import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantId: props.restaurantId,
      text: ''
    };
  }

  handleChange = (event) => this.setState( {text: event.target.value}) ; 

  handleSubmit = (event) => {
    console.log("Handle Submit Review",this.state)  
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: '',
    });    
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Review:</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;