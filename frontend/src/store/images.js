// const ADD_ONE_IMAGE = "images/addOneImage"
const ADD_IMAGES = 'images/addImages';

const addImages = (payload) => {
    return {
        type: ADD_IMAGES,
        payload
    }
}

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images');
    console.log(response);
    if(response.ok) {
        const data = await response.json();
        dispatch(addImages(data.images))
    }
}

const imageReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case ADD_IMAGES:
            console.log(action.payload)
            action.payload.forEach((image) => (newState[image.id] = image));
            return newState;
        default: 
            return state;
    }
};

export default imageReducer;