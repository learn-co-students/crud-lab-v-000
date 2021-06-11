import cuid from 'cuid';

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            //   debugger;
            return {...state, 
                restaurants:[...state.restaurants,{...action.restaurant, id:cuid()}]}
        case "DELETE_RESTAURANT":
            // debugger;
            return {...state, 
                restaurants: state.restaurants.filter(restaurant=>restaurant.id!==action.id)}
        case "ADD_REVIEW":
            // debugger;
            return {...state, 
                 reviews:[...state.reviews,{...action.review, id:cuid()}]}
        case "DELETE_REVIEW":
            return {...state, 
                reviews:[...state.review,{...action.review, id:cuid()}]}
        
        default:
            return state;
    }


}
