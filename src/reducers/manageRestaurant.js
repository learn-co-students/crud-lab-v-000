import cuid from 'cuid';

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            //   debugger;
            return {...state, 
                reviews:[...state.reviews],
                restaurants:[...state.restaurants,{...action.restaurant, id:cuid()}]}
        case "DELETE_RESTAURANT":
            // debugger;
            return {...state, 
                reviews: state.reviews.filter(review=>review.restaurantId!==action.id),
                restaurants: state.restaurants.filter(restaurant=>restaurant.id!==action.id)}
        case "ADD_REVIEW":
            // debugger;
            return {...state,
                restaurants:[...state.restaurants], 
                    reviews:[...state.reviews,{...action.review, id:cuid()}]}

        case "DELETE_REVIEW":
            //   debugger;
            return {...state, 
                restaurants:[...state.restaurants], 
                reviews: state.reviews.filter(review=>review.id!==action.id)}        
        default:
            return state;
    }


}
