import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createOneImage } from '../../store/images'
import './CreateImgForm.css';

function CreateImageForm({ hideModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitErrors = [];

        if (content.length <= 0) submitErrors.push('Content must be field in')
        if(!image) submitErrors.push('Must include Image.')
        if (content && image) {
            setErrors([]);
            const response = await dispatch(createOneImage({ content, image, userId: sessionUser.id }))

            if(response.errors) {
                return setErrors([response.errors])
            }
            hideModal();
        } else {
            return setErrors(submitErrors);
        }
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Image Post</h3>
            {errors.length > 0 && (
                <ul className="errors-ul">
                <h4>Invalid Entries</h4>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            )}
            <div className="form-div">
            <label>
                Content / Title
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                // required
                />
            </label>
            <label className="submit-bttn">
                Choose File
                <input type="file" onChange={updateFile} />
            </label>
            </div>
            <button className="submit-bttn" type="submit">Post Image</button>
        </form>
    );
}

export default CreateImageForm;
