import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createOneImage } from '../../store/images'
import './CreateImgForm.css';

function CreateImageForm({ hideModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState("");
    const [imageUrl, setImgUrl] = useState("");
    const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     const errorsArray = [];
    //     if(content.length > 0) errorsArray.push('Content must be field in')
    //     if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)$/) === null) errors.push('Image link must be an image url with a "jpg, jpe, tiff, png, gif, bmp".')
    //     setErrors(errorsArray);
    // })


    const handleSubmit = async(e) => {
        e.preventDefault();

        const submitErrors = [];

        let isValid = imageUrl.match(/(jpe?g|tiff|png|gif|bmp)$/) === null;
        // console.log(isValid)

        if(isValid) submitErrors.push('Image link must be an image url with a "jpg, jpe, tiff, png, gif, bmp".');
        if(content.length <= 0) submitErrors.push('Content must be field in')

        if(content && imageUrl && !isValid) {
            setErrors([]);
            await dispatch(createOneImage({ content, imageUrl, userId: sessionUser.id }))
            hideModal();
         } else {
             return setErrors(submitErrors);
         }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Image Post</h3>
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
                    // required
                />
            </label>
            <label>
                Image Url
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    // required
                />
            </label>
            <button className="submit-bttn" type="submit">Post Image</button>
        </form>
    );
}

export default CreateImageForm;
