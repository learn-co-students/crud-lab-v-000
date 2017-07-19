import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(){
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }


  render() {
    const{ text, id } = this.props.restaurant

    return (
      <div>
        <li>{text}
          <button onClick={this.handleOnClick}> DELETE </button>
          <ReviewInput store={this.props.store} restaurantId={id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
