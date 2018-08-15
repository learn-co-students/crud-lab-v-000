
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [], reviews: []}, action) {
    
    switch(action.type){
        
        case "ADD_RESTAURANT":
            return {...state, 
            restaurants: [...state.restaurants,{
                id: cuid(),
                text: action.resText
            }]};
            
        case "DELETE_RESTAURANT":
            return {...state,
                restaurants: state.restaurants.filter(res=>{
                    return res.id !== action.resId
                })
            }
            
        case "ADD_REVIEW":
            return {...state, reviews: [...state.reviews, {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId,
            }]}
            
        case "DELETE_REVIEW":
            return {...state, 
                reviews: state.reviews.filter(rev=>{
                    return rev.id !==action.revId
            })}
            
        default: 
            return state
    }
}
