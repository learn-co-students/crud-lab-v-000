
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [],}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text,
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            const newRests =  state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {...state, restaurants: newRests}
        
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            
            return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':
            const removeReview = state.reviews.filter(review => review.id !==action.id)
            return {...state, reviews: removeReview}

        default:
            return state
    }
}
