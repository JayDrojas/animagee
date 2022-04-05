import React, { useState } from 'react';
import { useDispatch } from "react-redux";


function CreateImageForm() {
    const dispatch = useDispatch(); 
    const [content, setContent] = useState("");
    const [imageUrl, setImgUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
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