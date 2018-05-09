import React, { Component } from 'react';
import Reviews from '../reviews/Reviews';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange (e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleOnSubmit (e) {
    // e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      },
    });
    this.setState({
      text: '',
    });
    // this.refs.fieldText.value = "";
  }
  render() {
    return (
      <div>
        <form id="restaurant" onSubmit={(e)=>this.handleOnSubmit(e)}>
          <p>
            <input type="text" value={this.state.text} onChange={(e)=>this.handleOnChange(e)}/>
          </p>
          <input type="submit" value="Submit"/>
        </form>
        // <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default RestaurantInput;
