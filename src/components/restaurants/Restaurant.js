import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantUpdateForm from './RestaurantUpdateForm'

class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      showUpdateForm: false
    };

    this.handleClearingUpdateForm = this.handleClearingUpdateForm.bind(this)
  }

  

  handleOnClick(event){
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  handleUpdateClick(event){
    this.setState({showUpdateForm: true});
  }

  handleClearingUpdateForm(event){
    this.setState({showUpdateForm: false});
  }



  render() {
    const showUpdateForm = this.state.showUpdateForm;
    let form;

    if (showUpdateForm){
      form =  <RestaurantUpdateForm restaurant={this.props.restaurant} handleClearingUpdateForm={this.handleClearingUpdateForm} updateRestaurant={this.props.updateRestaurant}/>
    }

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={ (event) => this.handleOnClick(event) }> X </button>
          <button onClick={ (event) => this.handleUpdateClick(event) }> Update </button>
          {form}
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
