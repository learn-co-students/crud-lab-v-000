import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      id: this.props.restaurant.id,
      text: this.state.text,
    });
    this.setState({
      text: '',
    });
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value,
    });
  }
 
  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}> 
          <input type='text' onChange={(event)=>this.handleOnChange(event)} value= {this.value}/><br />
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;