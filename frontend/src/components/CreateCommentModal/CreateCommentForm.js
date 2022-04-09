import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { createComment } from '../../store/comments';

function CreateCommentForm ({ hideModal }) {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!sessionUser) {
      return setErrors(['Must be logged in.'])
    }

    const comment = {
      userId: sessionUser.id,
      content
    }

    if(content.length > 0) {
      setErrors([]);
      // console.log(imageId)
      await dispatch(createComment(comment, imageId));
      hideModal();
    } else {
      return setErrors(['Content can not be left blank.'])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Comment on Image</h3>
      {errors.length > 0 && (
        <ul className="errors-ul">
        <p>Invalid Entries</p>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
    )}
      <label id='label-textarea-comment'>
        Comment:
        <textarea
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </label>
      <button className="submit-bttn" type="submit">Post Comment</button>
    </form>
  )
}

export default CreateCommentForm;
