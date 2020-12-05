import cuid from 'cuid'
export const cuidFn = cuid

export default function reviewReducer(state = {reviews: []}, action){
    let idx;
    switch(action.type){
        case 'ADD_REVIEW':
            console.log(action)
            const newReview = {text: action.review, id: cuidFn(), restaurantId: action.restaurant.restaurant.id}
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
    
}