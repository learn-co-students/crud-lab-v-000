
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
     reviews: []
    }, action) {
    // debugger;
    switch (action.type) {
        case "ADD_RESTAURANT":
            const resaurant = {id: cuidFn(), text: action.text}
            return {...state, restaurants: [...state.restaurants, resaurant]}
        case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}
        
        case "ADD_REVIEW":
        const newReview ={
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
        }
        return {...state, reviews: [...state.reviews, newReview]}


        case "DELETE_REVIEW":
        const reviews = state.reviews.filter(review => review.id !== action.id)
        return {...state, reviews}
            
    
        default:
            return state
    }
}
