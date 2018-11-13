
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
        debugger
            const restaurant = {
                id: cuidFn(),

                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            const updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {...state, restaurants: updatedRestaurants}
        
        case 'ADD_REVIEW':
            const review = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}
        
        case 'DELETE_REVIEW':
            const updatedReviews = state.reviews.filter(review => review.id !== action.id)
            return {...state, reviews: updatedReviews}

        default:
            return state;
    }
}
