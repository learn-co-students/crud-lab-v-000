import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: "",
      restaurantId: this.props.restaurant.id
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
         <input
           type="text"
           onChange={(event) => this.handleOnChange(event)}
           value={this.state.text}
         />
         <input type="submit" />
     </form>
      </div>
    );
  }
};

export default ReviewInput;
