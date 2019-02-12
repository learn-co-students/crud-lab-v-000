import cuid from 'cuid';
export const cuidFn = cuid;

function reviewReducer(state = [], action) {
    switch(action.type) {
        case "ADD_REVIEW":
            const review = { ...action.review, id: cuid()};
            return [...state, review];

        case "DELETE_REVIEW":
            const reviewId = action.reviewId;
            return [...state].filter(obj => obj.id !== reviewId);
            
        default:
            return state;
    }
}

export default reviewReducer;