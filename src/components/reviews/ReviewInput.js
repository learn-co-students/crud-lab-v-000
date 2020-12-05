import React, { Component } from 'react';
import Reviews from './Reviews';


class ReviewInput extends Component {



  state = {
    text: '',
    restaurantId: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
      restaurantId: this.props.restaurant.id
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: '',
      restaurantId: ''
    });
  }

  render() {
    //const restaurant = this.props.restaurant;
    return (
      <div>
        <form onSubmit ={(event) => this.handleOnSubmit(event)}>
          <p>
          <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.handleOnChange(event)}/>
          </p>
            <input type="submit" />
        </form>

      </div>
    );
  }
};

export default ReviewInput;
