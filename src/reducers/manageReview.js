import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReview(
    state = { reviews:[]}, 
    action) 
{
    console.log("manageReview", action);
    switch (action.type) {
       
        case "ADD_REVIEW":
            let newReview = Object.assign({}, action.review)
            newReview.id = cuid();
            console.log("Adding Review, new state",state.reviews.concat(newReview) );
            return { ...state, reviews: state.reviews.concat(newReview) };

        case 'DELETE_REVIEW':
            return { ...state, reviews: state.reviews.filter(r => r.id !== action.id)}
            
        default:
            return state;
    }
}

