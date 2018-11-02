import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text" 
            name="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)} 
          />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};


export default RestaurantInput;
