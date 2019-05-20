import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit=(event) =>{
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    });
  }

  handleChange =(event) =>{
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
      <label>Add Review</label>
      <form onSubmit={(event)=>this.handleSubmit(event)}>
      <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.text}/>
      <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default ReviewInput;
