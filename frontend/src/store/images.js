import { csrfFetch } from './csrf';
const ADD_ONE_IMAGE = "images/addOneImage"
const ADD_IMAGES = 'images/addImages';

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

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images');
    console.log(response);
    if(response.ok) {
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
            console.log(action.payload)
            action.payload.forEach((image) => (newState[image.id] = image));
            return newState;
        case ADD_ONE_IMAGE: 
            newState = Object.assign({}, state);
            console.log('---------->',action)
            newState[action.payload.id] = action.payload;
            return newState
        default: 
            return state;
    }
};

export default imageReducer;