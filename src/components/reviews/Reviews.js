import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import { cuidFn } from '../../App';
import { removeReview } from '../../actions/actions'

class Reviews extends Component {

  handleRemove = (id) => {
    this.props.removeReview(id);
  }

  generateReviews = () => {
    return this.props.reviews
      .filter(r => r.restaurantId === this.props.restaurantId)
      .map( r => (
        <Review key={cuidFn()} review={r} handleRemove={this.handleRemove} />
    ));
  }

  render() {
    return (
      <ul>
        { this.props.reviews ? this.generateReviews() : console.warn("No reviews were found.") }
      </ul>
    );
  }
};


const mapStateToProps = ({ reviews }) => ({ reviews });
const mapDispatchToProps = dispatch => ({ removeReview: (id) => dispatch(removeReview(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);