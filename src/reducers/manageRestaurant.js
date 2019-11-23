
import cuid from 'cuid';
import Restaurant from '../components/restaurants/Restaurant';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
}, action) {
    switch (action.type) {
        
        case 'ADD_RESTAURANT':
//    debugger
            const restaurantId = {
                id: cuid(),
                text: action.text
            }
            return { ...state,
                restaurants: state.restaurants.concat(restaurantId)
            }
    
    
        case 'DELETE_RESTAURANT':
            return { ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }
        
        //  FOR REVIEWS>

        case 'ADD_REVIEW':
            console.log("action", action)
                const review = {
                    id: cuid(),
                    text: action.review.text,
                    restaurantId: action.review.restaurantId
                }
            
                // return { reviews: (...state, this.props.state.reviews.concat(review)) }
                return { ...state, reviews: [...state.reviews, review] }
        
            case 'DELETE_REVIEW':
                return { reviews: state.reviews.filter(restaurant => restaurant.id !== action.id) }
        
        
        
        
        default:
            return state;
        
    }
}


