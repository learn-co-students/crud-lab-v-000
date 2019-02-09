import React, { Component } from 'react';
import Reviews from './Reviews';
import {connect} from 'react-redux'

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state= {
      text: "",
      restaurantId: this.props.restaurantId
    }
  }


  handleChange=(e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        {console.log(this.state.restaurantId)}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>

        </form>
      </div>
    );
  }
};


export default ReviewInput;
