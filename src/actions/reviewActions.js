export const addReview = review => ({ type: "ADD_REVIEW", review });

export const deleteReview = review => ({
  type: "DELETE_REVIEW",
  id: review.id
});
