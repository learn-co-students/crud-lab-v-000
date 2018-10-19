import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(
    state = { restaurants:[], reviews:[]}, 
    action) 
{
    //console.log("manageRestaurant", action);
    switch (action.type) {
        case "ADD_RESTAURANT":
            let newRestaurant = Object.assign({}, action.restaurant)
            newRestaurant.id = cuid();
            return { ...state, restaurants: state.restaurants.concat(newRestaurant) };

        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id)}
        
        case "ADD_REVIEW":
            let newReview = Object.assign({}, action.review)
            newReview.id = cuid();
            return { ...state, reviews: state.reviews.concat(newReview) };

        case 'DELETE_REVIEW':
            return { ...state, reviews: state.reviews.filter(r => r.id !== action.id)}
                     
        default:
            return state;
    }
}


