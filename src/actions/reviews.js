export const addReview = review => {
  return { type: "ADD_REVIEW", review };
};

export const removeReview = reviewId => {
  return { type: "DELETE_REVIEW", id: reviewId };
};
