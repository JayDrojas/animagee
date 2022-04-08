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
    <form onSubmit={handleSubmit}>
      <h3>Update Comment</h3>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Comment:
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </label>
      <button className="submit-bttn" type="submit">Update Comment</button>
    </form>
  )
}

export default UpdateCommentForm;
