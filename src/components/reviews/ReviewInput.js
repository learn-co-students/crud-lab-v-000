import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();

    this.state = {
      text: ''
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();    
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })

    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <p>
           <label>Add Review</label>
           <input 
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
           />
         </p>
         <input type="submit" />  
       </form>
       <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
