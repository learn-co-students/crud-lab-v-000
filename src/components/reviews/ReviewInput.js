import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../actions/actions.js'
import { cuidFn } from '../../App.js';

class ReviewInput extends Component {
  
  state = {
    text: '',
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Not super sure if I want e.target.value
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      id: cuidFn(),
    });
    this.setState({
      text: '',
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
      
            <input 
              
              onChange={this.handleChange} 
              placeholder="Add a review" 
              type="text" 
              value={this.state.text} 
            />
          
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: rev => dispatch(addReview(rev)), 
  }
}

export default connect(null, mapDispatchToProps)(ReviewInput);
