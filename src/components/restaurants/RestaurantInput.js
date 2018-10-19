import React, { Component } from 'react'

class RestaurantInput extends Component {

  state = {
    text: ''
  };

  handleChange = (event) => this.setState( {text: event.target.value}) ; 
 
  handleSubmit = (event) => {
    // console.log("Handle Submit",this.state)
    // console.log("and props",this.props)    
    event.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({
      text: '',
    });    
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Restaurant:</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RestaurantInput;