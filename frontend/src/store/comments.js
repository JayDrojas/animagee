import { csrfFetch } from './csrf';
const LOAD_COMMENTS = "comments/loadComments";
const ADD_COMMENT = "comments/addComment";
const UPDATE_COMMENT = "comments/updateComment";
const REMOVE_COMMENT = "comments/removeComment";

const loadComments = (comments, imageId) => {
  return {
    type: LOAD_COMMENTS,
    comments,
    imageId
  }
}


const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

const update = (comment) => ({
  type: UPDATE_COMMENT,
  comment
})

const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    payload: id
  }
}

export const deleteComment = (id) => async dispatch => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: "DELETE"
  })

  if (response.ok) {
    dispatch(removeComment(id))
  }
}

export const getComments = (imageId) => async (dispatch) => {
  const response = await fetch(`/api/images/${imageId}/comments`)

  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments, imageId))
  }
}

export const updateComment = (data) => async dispatch => {
  const response = await csrfFetch(`/api/comments/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(update(comment));
  }
}

export const createComment = (data, imageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${imageId}/comments`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const comment = await response.json();
    dispatch(addComment(comment))
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      const newComments = {};
      action.comments.forEach((comment) => {
        newComments[comment.id] = comment;
      })
      return {
        ...state,
        ...newComments
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.comment.id]: action.comment.comment
      }

    case REMOVE_COMMENT:
      const newState = {...state}
      delete newState[action.payload];
      return newState
    default:
      return state;
  }
}

export default commentReducer;
