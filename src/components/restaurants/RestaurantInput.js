import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }
  
  handleSubmit(event){
    event.preventDefault()
    this.props.addName(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleChange(event){
    //every time the user clicks a key,
    //change state to everything in past state plus current

    this.setState({
      text: event.target.value
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <label>Restaurant Name</label>
            <input 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
              value={this.state.text} >
            </input><br></br>
            
            <input 
            type="submit">
            </input><br></br>
        </form>
      </div>
    );
  }
};



export default RestaurantInput;
