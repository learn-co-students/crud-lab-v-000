
import cuid from 'cuid';
import Restaurant from '../components/restaurants/Restaurant';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {
        
        case 'ADD_RESTAURANT':
//    debugger
            const restaurantId = {
                id: cuid(),
                text: action.text
            }
            return { restaurants: state.restaurants.concat(restaurantId) }
    
    
        case 'DELETE_RESTAURANT':
            return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }
        
        //  FOR REVIEWS>

        case 'ADD_REVIEW':
                const reviewId = {
                    id: cuid(),
                    text: action.text
                }
            debugger
                return { reviews: state.reviews.concat(reviewId) }
        
        
            case 'DELETE_REVIEW':
                return { reviews: state.reviews.filter(restaurant => restaurant.id !== action.id) }
        
        
        
        
        default:
            return state;
        
    }
}


