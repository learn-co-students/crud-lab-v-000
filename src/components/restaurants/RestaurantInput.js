import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state ={
      text: ''
    }
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({text:''})
  }
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
                 value={this.state.text}
                 onChange={(event)=>this.setState({text: event.target.value})}
                 />
          <button>Add Restaurant</button>
        </form>  
      </div>
    );
  }
};

export default RestaurantInput;
