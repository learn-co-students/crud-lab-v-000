import React, { Component } from 'react';
import {connect} from 'react-redux'

import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
    getReviewsByRestaurant(){
        return this.props.reviews.filter(review=>review.restaurantId===this.props.restaurantId)||[]
    }

    render() {
        return (
            <div>
            <ReviewInput 
                restaurantId={this.props.restaurantId} 
                addReview={this.props.addReview}
                />
            <Reviews 
                reviews={this.getReviewsByRestaurant()}  
                deleteReview={this.props.deleteReview}
                restaurantId={this.props.restaurantId}
                />
            </div>
        )
    }
}

const mapStateToProps = ({reviews})=>({reviews});
const mapDispatchToProps = (dispatch)=>{
    return {
        addReview: (review)=>dispatch({type:"ADD_REVIEW", review}),
        deleteReview: (id)=>dispatch({type:"DELETE_REVIEW", id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
