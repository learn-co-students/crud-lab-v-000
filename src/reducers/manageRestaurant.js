import cuid from 'cuid';
export const cuidFn = cuid;
let id = 0;
export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
            const restaurant = {...action.restaurant, id: cuid() };
            return {restaurants: state.restaurants.concat(restaurant), reviews: state.reviews};
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            const revs = state.reviews.filter(review => review.restaurantId !== action.id);
            return {restaurants, reviews: revs};
        case 'ADD_REVIEW':
            id++;
            const review = {...action.review, restaurantId: action.restaurantId, id: id};
            return {restaurants: state.restaurants, reviews: state.reviews.concat(review)}
        case 'DELETE_REVIEW':
            
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {restaurants: state.restaurants, reviews: reviews};
        default:
            return state;
    }

}