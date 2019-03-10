import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantInput from './RestaurantInput'

class Restaurant extends Component {
  state = {
    form: ""
  }

  renderUpdateForm = restaurant => {
    this.setState({
      form: (<RestaurantInput restaurant={restaurant}
                              formMethod={this.props.formMethod}
                              removeUpdateForm={this.removeUpdateForm} />)
    })
  }

  removeUpdateForm = () => {
    this.setState({form: ""})
  }

  render() {
    const { restaurant, deleteR } = this.props;

    return (
      <React.Fragment>
        <li>
          <button onClick={e => deleteR(restaurant.id)}>&times;</button>
          {
            this.state.form !== "" ? this.state.form : (
              <React.Fragment>
                <span style={{fontSize:'30px'}}>{restaurant.text}</span>
                <a onClick={e => this.renderUpdateForm(restaurant)}>Update</a>
              </React.Fragment>
            )
          }
          <ReviewsContainer restaurantId={restaurant.id} />
        </li>
      </React.Fragment>
    );
  }
};

export default Restaurant;
