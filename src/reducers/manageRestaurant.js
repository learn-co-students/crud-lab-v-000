
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const rest = Object.assign({}, {text: action.text, id: cuidFn()});
            return {restaurants: state.restaurants.concat(rest), reviews: state.reviews};
        case 'DELETE_RESTAURANT':
            const rests = state.restaurants.filter(rest => rest.id !== action.id);
            const revs = state.reviews.filter(rev => rev.restaurantId !== action.id)
            return {restaurants: rests, reviews: revs};
        case 'ADD_REVIEW':
            const rev = Object.assign({}, {text: action.text, id: cuidFn(), restaurantId: action.restaurantId});
            return {restaurants: state.restaurants, reviews: state.reviews.concat(rev)};
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(rev => rev.id !== action.id)
            return {restaurants: state.restaurants, reviews: reviews};
        default:
            return state;
    }
}