export function addReview({ text, restaurantId }){
    return{
        type: "ADD_REVIEW",
        payload: { text, restaurantId }
    }
} 