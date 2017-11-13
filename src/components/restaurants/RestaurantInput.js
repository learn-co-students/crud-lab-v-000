import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();

    this.state = { 
      text: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    });

    this.setState({
      text: ''
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Rerstaurnt Name</label>
            <input 
              type="text"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </p> 
          <input type="submit" />
        </form>  
      </div>
    );
  }
};

export default RestaurantInput;
