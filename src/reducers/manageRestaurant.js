import cuid from 'cuid';
export const cuidFn = cuid

export default function manageRestaurant(state= {
    restaurants: [],
    reviews: []}, action) {
    
    let idx;
    switch(action.type){
        case 'ADD_RESTAURANT':
            const newRestaurant = {text: action.text, id: cuidFn()}
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: [...state.restaurants, newRestaurant]
                
            }
            
        case 'DELETE_RESTAURANT':
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.id)
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: [...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)]
            }
            // let idx;
    // switch(action.type){
        case 'ADD_REVIEW':
            // console.log(action)
            const newReview = {text: action.review, id: cuidFn(), restaurantId: action.restaurantId}
            return {
                ...state, 
                reviews: [...state.reviews, newReview]
            }
                case 'DELETE_REVIEW':
                    idx = state.reviews.findIndex(review => review.id === action.id)
                    return {
                        ...state,
                        reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)]
                    }
                default:
                    return state
                }
            // }
}
