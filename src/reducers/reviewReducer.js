import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    //console.log(state)
    //console.log(action)
    switch(action.type) {
    case 'ADD_REVIEW':
        let review = {
            id: cuid(),
            text: action.text,
            restaurantId: action.restaurantId
        }
        console.log(review)
        return [...state, review]
    case 'DELETE_REVIEW':
        return state.filter(review => review.id !== action.id)
    default:
        return state;
    }

};