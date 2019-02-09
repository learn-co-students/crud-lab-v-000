import React, { Component } from 'react';
import {connect} from 'react-redux'




class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }


handleChange=(e)=>{
  this.setState({
    text: e.target.value

  })
  
}

handleSubmit=(e)=>{
  e.preventDefault()
  this.props.addRestaurant(this.state.text)
  this.setState({
    text:''
  })
}



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Create a New Restaurant</label><br />
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>

        </form>
      </div>
    );
  }
};



export default RestaurantInput;
