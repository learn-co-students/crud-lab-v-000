
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants
(
    state = {
        restaurants: [],
        reviews: []
    }, 
    action
) 
{
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        
        case "DELETE_RESTAURANT":
            console.log("DELETE_RESTAURANT called")
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

        case "ADD_REVIEW":
            console.log("ADD_REVIEW called")
            const review = {
                id: cuid(),
                restaurantId: action.restaurantId,
                text: action.text
            }
            return {...state, reviews: [...state.reviews, review]}

        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state
    }
}
