import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from '../../store/comments'

function UpdateCommentForm ({ hideModal, comment }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState(comment.content);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(content) {
      setErrors([]);
       dispatch(updateComment({content, userId: sessionUser.id, id: comment.id}))
      hideModal();
    } else {
      return setErrors(["Make sure content is filled in."])
    }
  }


  return (
    <form className="form-form" onSubmit={handleSubmit}>
      <h3>Update Comment</h3>
      {errors.length > 0 && (
        <ul className="errors-ul">
        <p>Invalid Entries</p>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
    )}
    <div className="form-div">
      <label id='label-textarea-comment'>
        Comment:
        <textarea
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </label>
      </div>
      <div id='buttons-form-update'>
      <button className="submit-bttn" type="submit">Update Comment</button>
      </div>
      </form>
  )
}

export default UpdateCommentForm;
