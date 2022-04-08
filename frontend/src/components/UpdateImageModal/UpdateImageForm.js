import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editImage } from '../../store/images'

function UpdateImageForm({ hideModal, image, user }) {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState(image.content);
    const [imageUrl, setImgUrl] = useState(image.imageUrl);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(content && imageUrl) {
            setErrors([]);
            await dispatch(editImage({ content, imageUrl, userId: user.id, id: image.id }))
            hideModal();
        } else {
            return setErrors(['Make sure content and image url is filled in.'])
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Image Post</h3>
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
            <button className='submit-bttn' type="submit">Update Image</button>
        </form>
    );
}

export default UpdateImageForm;
