import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { editImage } from '../../store/images'

function UpdateImageForm({ hideModal, image, user }) {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [content, setContent] = useState(image.content);
    const [newImage, setNewImage] = useState("");
    const [errors, setErrors] = useState([]);
    const [changed, setChanged] = useState(false)
    const [currentImg, setCurrentImg] = useState(image?.imageUrl)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitErrors = [];

        // let isValid = imageUrl.match(/(jpe?g|tiff|png|gif|bmp)/) === null;
        // // console.log(isValid)

        // if (isValid) submitErrors.push('Image link must be an image url with a "jpg, jpe, tiff, png, gif, bmp".');
        if (content.length <= 0) submitErrors.push('Content must be field in')

        if (submitErrors.length) return setErrors(submitErrors)

        image.content = content;
        const formData = new FormData();
        formData.append("content", content);
        formData.append("image", newImage);
        formData.append("userId", user.id);
        formData.append("albumId", null);
        // formData.append('id', image?.id)
        // { content, userId: user.id, id: image.id }
        const response = await dispatch(editImage({formData, id: image?.id}))

        if(response.errors) {
            return setErrors([response.errors])
        }

        hideModal();
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        setNewImage(file)
        setChanged(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Image Post</h3>
            {errors.length > 0 && (
                <ul className="errors-ul">
                    <p>Invalid Entries</p>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            )}
            <div className="form-div">
                {currentImg && !changed && (
                    <img id="image-pic" className="edit-image" src={currentImg} alt='' />
                )}
                {image && changed && (
                    <img id="image-pic" src={URL.createObjectURL(newImage)} alt='' />
                )}
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
            <button className='submit-bttn' type="submit">Update Image</button>
        </form>
    );
}

export default UpdateImageForm;
