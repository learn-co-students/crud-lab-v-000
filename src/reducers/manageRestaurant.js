
import cuid from 'cuid';
export const cuidFn = cuid;
let id = 0;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const r = Object.assign([], {text: action.restaurant.text, id: cuid()});
            state.restaurants.push(r);
            return { restaurants: state.restaurants, reviews: state.reviews };
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return  { restaurants: restaurants, reviews: state.reviews }
        case 'ADD_REVIEW':
            id++;
            const rev = Object.assign([], {id: id, text: action.review.text, restaurantId: action.restaurantId});
            state.reviews.push(rev);
            return { restaurants: state.restaurants, reviews: state.reviews };
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return  { restaurants:state.restaurants, reviews: reviews }
        default:
            return state;
    }
}