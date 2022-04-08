import { csrfFetch } from './csrf';
const ADD_ONE_IMAGE = "images/addOneImage"
const ADD_IMAGES = 'images/addImages';
const REMOVE_ONE_IMAGE = 'images/removeOneImage';
const UPDATE_ONE_IMAGE = 'images/updateOneImage'
const GET_ONE_IMAGE = 'images/getOneImage';

const addImages = (payload) => {
    return {
        type: ADD_IMAGES,
        payload
    }
}

const setImage = (image) => {
    return {
        type: ADD_ONE_IMAGE,
        payload: image,
    };
};

const removeImage = (id) => {
    return {
        type: REMOVE_ONE_IMAGE,
        payload: id
    }
}

const updateImage = (image) => {
    return {
        type: UPDATE_ONE_IMAGE,
        payload: image
    }
}

const getOne = (image) => {
    return {
        type: GET_ONE_IMAGE,
        payload: image
    }
}

export const getOneImage = (id) => async dispatch => {
    const response = await fetch(`/api/images/${id}`);
    const image = await response.json();
    dispatch(getOne(image));
}

export const editImage = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json()
        const image = data.image
        dispatch(updateImage(image))
    }
}
export const deleteImage = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(removeImage(id))
    }
}

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images');
    if (response.ok) {
        const data = await response.json();
        dispatch(addImages(data.images))
    }
}

export const createOneImage = (image) => async (dispatch) => {
    const { content, imageUrl, userId, albumId } = image;
    const response = await csrfFetch('/api/images', {
        method: "POST",
        body: JSON.stringify({
            content, imageUrl, userId, albumId
        }),
    });
    const data = await response.json();
    dispatch(setImage(data.image));
    return response;
}

const imageReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case ADD_IMAGES:
            // console.log(action.payload)
            action.payload.forEach((image) => (newState[image.id] = image));
            return newState;
        case ADD_ONE_IMAGE:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState
        case REMOVE_ONE_IMAGE:
            newState = { ...state }
            delete newState[action.payload]
            return newState;
        case UPDATE_ONE_IMAGE:
            newState = { ...state }
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default imageReducer;

// case GET_ONE_IMAGE:
//     return {
//         ...state,
//         [action.image.id]: {
//             ...state[action.image.id],
//             ...action.image,
//         }
//     }
