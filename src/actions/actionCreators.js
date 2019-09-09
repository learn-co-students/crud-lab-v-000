export function addReview(restaurantId, text) {
  return {
    type: 'ADD_REVIEW',
    restaurantId,
    text
  }
}

export function deleteReview(reviewId) {
  return {
    type: 'DELETE_REVIEW',
    reviewId
  }
}



