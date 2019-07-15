export const addReview = review => ({
    type: 'ADD_REVIEW',
    review
});

export const deleteReview = id => ({
    type: 'DELETE_REVIEW',
    id
});

export const updateReview = review => ({
    type: 'UPDATE_REVIEW',
    review
});
