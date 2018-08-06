
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []
    }, action) {
    console.log('action dispatched: ', action);
    switch(action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.formData
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'UPDATE_RESTAURANT':
            const updatedRestaurants = state.restaurants.map(restaurant => { 
                if (restaurant.id === action.formData.id){ 
                    restaurant.text = action.formData.text 
                } 
                return restaurant
            })
            return {...state, restaurants: updatedRestaurants}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.formData.restaurantId,
                text: action.formData.text
            }
            return {...state, reviews: [...state.reviews, review]}
        case 'UPDATE_REVIEW':
            const updatedReviews = state.reviews.map(review => { 
                if (review.id === action.formData.id){ 
                    review.text = action.formData.text 
                } 
                return review
            })
            return {...state, reviews: updatedReviews}
        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
        default:
            return state;
    }
}
