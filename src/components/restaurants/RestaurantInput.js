import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
 
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_RESTAURANT',
    restaurant: {
      text: this.state.text,
      id: cuid()
    }
  });
}
 
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Restaruant Name:
         <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
     </div>
   );
  }
};

export default RestaurantInput;
