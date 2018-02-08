
import cuid from 'cuid';
let cuidFn;

export default function manageRestaurants(state = { 
    restaurants: [], reviews: [] }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            cuidFn = cuid.slug();
            const restaurant = Object.assign({}, action.restaurant, { id: cuidFn });
            return { restaurants: [...state.restaurants, restaurant]};
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { restaurants }
        case 'ADD_REVIEW':
            cuidFn = cuid.slug();
            const review = {text: action.review.text, restaurantId: action.restaurantId, id: cuidFn}
            return Object.assign({}, state, { reviews: [...state.reviews, review]})
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return { reviews }
        default:
            return state;
    }
}