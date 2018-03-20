import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
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
    type: 'ADD_REVIEW',
    review: {
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
          Review:
         <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
     </div>
   );
  }
};

export default ReviewInput;
