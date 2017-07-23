
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants : [], reviews: []}, action) {
    switch (action.type) {
        case "ADD_RESTURANT":
            const restaurant = {text: action.restaurant, id: cuid()}
            return Object.assign({}, state, {restaurants: [...state.restaurants, restaurant]})
        case "DELETE_RESTAURANT":
            return Object.assign({}, state, {restaurants: state.restaurants.filter(item => item.id !== action.id )});
        case "ADD_REVIEW":
            const review = {text: action.text, restaurantId: action.restaurantId, id: cuid()}
            return Object.assign({}, state, {reviews: [...state.reviews, review]})
        case "DELETE_REVIEW":
            return Object.assign({}, state, {reviews: state.reviews.filter(item => item.id !== action.id )})
        default:
            return state;
    }
}