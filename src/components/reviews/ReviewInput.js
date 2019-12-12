import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
   text: ''
  }
  
  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit(event) {

    event.preventDefault();
    
    const restaurantReview = {
      text: this.state.text,
      restaurantId: this.props.restaurantId

    }
      this.props.addReview(restaurantReview);
    
    this.setState({

      text: '',
    })
  }

  render() {
    return (
      <div>
        Review Input #

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
