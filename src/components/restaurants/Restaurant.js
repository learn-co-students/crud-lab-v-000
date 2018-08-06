import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  constructor(props){
    super(props);

    this.state = {
      edit: false,
      text: this.props.restaurant.text,
      id: this.props.restaurant.id
    }
  }

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <input type='submit' value='Edit' />
      </form>
    )
  }

  renderRestaurantDetails = () => {
    return (
      <div>
        { this.props.restaurant.text } 
        <button onClick={this.handleClick}>Edit Restaurant</button>
        <button onClick={() => this.props.delete(this.props.restaurant.id)}> X </button>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      edit: true
    });
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.state);
    this.setState({
      edit: false
    });
  }

  render() {
    return (
      <div>
        <li>
          { this.state.edit ? this.renderForm() : this.renderRestaurantDetails() }
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
