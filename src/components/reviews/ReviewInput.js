import React, { Component } from 'react';
//import Reviews from './Reviews';


class ReviewInput extends Component {



  state = {
    text: ''
    //restaurantId: ''
  }




  handleOnChange = event => {
    this.setState({
      text: event.target.value
      //restaurantId: this.props.restaurant.id
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurant.id
    });
    //debugger;
    this.setState({
      text: ''
      //restaurantId: ''
    });
  }

  render() {

    //const restaurantId = this.props.restaurant.id;

    return (
      <div>
        <form onSubmit ={(event) => this.handleOnSubmit(event)}>
          <p>
          <input
              type="text"
              value={this.state.text}
              placeholder="Enter review"
              onChange={(event) => this.handleOnChange(event)}/>
          </p>
            <input type="submit" />
        </form>

      </div>
    );
  }
};

export default ReviewInput;
