import React, { Component } from 'react';
import { connect} from 'react-redux'

class RestaurantInput extends Component {

  state = {
   text: ''
 }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  handleOnSubmit(event) {
    event.preventDefault();
    // debugger

    console.log(this.state)
    this.props.addRestaurant(this.state.text);

    // this.props.store.dispatch({
    //   type: "ADD_RESTAURANT", restaurant: {text: this.state.text},
    // })
     
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Restaurant Input

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            // May have to comeback and change to resturantText
          onChange={(event) => this.handleOnChange(event)} />
          
          <input type="submit" />
      </form>
      </div>
    );
  }
};

export default (RestaurantInput);
