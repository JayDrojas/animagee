import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createOneImage } from '../../store/images'

function CreateImageForm({ hideModal }) {
    const dispatch = useDispatch(); 
    const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState("");
    const [imageUrl, setImgUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(content && imageUrl) {
            setErrors([]);
            await dispatch(createOneImage({ content, imageUrl, userId: sessionUser.id }))
            hideModal();
            // return dispatch(createOneImage({ content, imageUrl, userId: sessionUser.id }))
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) {
            //         hideModal();
            //         setErrors(data.errors);
            //     }
            // });
        }
        return setErrors(['Make sure content and image url is filled in.'])
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Content / Title
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </label>
            <label>
                Image Url
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Post Image</button>
        </form>
    );
}

export default CreateImageForm;