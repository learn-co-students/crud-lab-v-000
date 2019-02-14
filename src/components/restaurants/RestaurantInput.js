import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()

    this.state = {
      text: '',
    }
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
        <p>(Restaurant Input) Search Restaurant:</p>
        
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={(event) => this.changeHandler(event)} value={this.state.text} />
          <input type="submit" />
        </form>
        
        <p>{this.state.text}</p>

      </div>
    );
  }
};

export default RestaurantInput;
