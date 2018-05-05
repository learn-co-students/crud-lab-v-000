import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    };
  }
  
  onKeyPressed = (event) => {
    console.log(event);
    this.setState({
      text: event.target.value
    });
  }
  
  handleOnSubmit = (event) => {
    // debugger
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT', 
      restaurant: this.state,
    });
    this.setState({
      text: '',
    });
    
  }
  
  render() {
    // debugger
    return (
      <div>
         <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>add restaurent</label>
            <input 
              type="text" 
              value={this.state.text} 
              onChange={(e) => this.onKeyPressed(e)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
