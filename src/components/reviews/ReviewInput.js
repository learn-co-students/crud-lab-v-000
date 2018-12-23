import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }


  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnClick = event => {
    event.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className='ReviewInput'>
        <form onSubmit={(event) => this.handleOnClick(event)}>
          <input type="text" 
            onChange={event => this.handleOnChange(event)}
            value={this.state.text}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
