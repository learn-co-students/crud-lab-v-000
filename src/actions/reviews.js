export const addReview = (text) => {
  return { type: 'ADD_REVIEW', text }
}


export const removeReview = (reviewId) => {
  return { type: 'DELETE_REVIEW', id: reviewId }
}
