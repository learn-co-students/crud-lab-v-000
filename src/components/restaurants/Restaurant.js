import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { connect } from 'react-redux';

class Restaurant extends Component {

  handleOnClick = (id) => {
    this.props.deleteRestaurant(id);
  }
  render() {
    return (
      <div>
        <li>
          {this.props.text}
          <button 
            onClick={() => this.handleOnClick(this.props.id)}> 
            X 
          </button>

          <ReviewsContainer restaurant={this.props.text}/>
        </li>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: id => {
      dispatch({
        type: "DELETE_RESTAURANT",
        id: id
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Restaurant)