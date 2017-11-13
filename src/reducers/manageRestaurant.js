
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state =  { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = Object.assign(
                {}, 
                action.restaurant, 
                { id: cuidFn() }
            );
            return Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant) }) ;
        case 'DELETE_RESTAURANT':
            return Object.assign({}, state, { 
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            });
        case 'ADD_REVIEW':
             const newReview = Object.assign({}, action.review, { id: cuidFn() });
             const stateWithNewReview = Object.assign(
                 {}, 
                 state, 
                 { reviews: state.reviews.concat(newReview) } 
            );
            return stateWithNewReview;
        case 'DELETE_REVIEW':
            const updatedState = Object.assign(
                {},
                state,
                { reviews: state.reviews.filter(review => review.id !== action.id)}
            );
            return updatedState;
        default:
            return state;
    }
}