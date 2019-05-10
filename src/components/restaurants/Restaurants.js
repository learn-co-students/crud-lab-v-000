import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cuidFn } from '../../App.js';
import Restaurant from './Restaurant';
import { removeRestaurant } from '../../actions/actions'

class Restaurants extends Component {

  handleRemove = (id) => {
    this.props.removeRestaurant(id);
  }

  generateRestaurants = () => {
    return this.props.restaurants.map(r => (
      <Restaurant key={cuidFn()} restaurant={r} handleRemove={this.handleRemove} />
    ));
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.restaurants ? this.generateRestaurants() : null}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants });
const mapDispatchToProps = dispatch => ({ removeRestaurant: (id) => dispatch(removeRestaurant(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);