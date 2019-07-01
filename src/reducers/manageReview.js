
export default function manageReviews(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            return [...state, action.review];

        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)

        default:
            return state;
    }
}
