import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({text: ''});
  }


  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
         <form onSubmit={e => this.handleOnSubmit(e)}>
           <input
             type="text"
             value={this.state.text}
             onChange={e => this.handleOnChange(e)}
           />
           <input
             type="submit"
             value="Add Review"
           />
         </form>
      </div>
    );
  }
};

export default ReviewInput;
