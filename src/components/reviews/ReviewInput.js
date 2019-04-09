import React, { Component } from 'react';


class ReviewInput extends Component {
  state = {
      text: '',
      restaurantId: this.props.restaurant.id,
    }


    handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }

      handleOnSubmit(event) {
        event.preventDefault();
        this.props.addReview(this.state);
        this.setState({
          text: ''
        })
      }

  render() {
    return (
      <div>
        <h5>Write a review for {this.props.restaurant.text}</h5>
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
