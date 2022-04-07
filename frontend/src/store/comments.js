import { csrfFetch } from './csrf';
const LOAD_COMMENTS = "comments/addComments";

const loadComments = (comments, imageId) => {
  return {
    type: LOAD_COMMENTS,
    comments,
    imageId
  }
}

export const getComments = (imageId) => async (dispatch) => {
  const response = await fetch(`/api/images/${imageId}/comments`)

  if(response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments, imageId))
  }
}

const commentReducer = (state = {}, action) => {
  // let newState = {};
  switch(action.type) {
    case LOAD_COMMENTS:
      const newComments = {};
      action.comments.forEach((comment) => {
        newComments[comment.id] = comment;
      })
      return {
        ...newComments
      }
    default:
      return state;
  }
}

export default commentReducer;
