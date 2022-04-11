import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from '../../store/comments'

function DeleteCommentForm ({ hideModal, comment }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState(comment.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(deleteComment(comment.id))
      hideModal();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h3>Are you sure you want to delete this comment?</h3>
      <div id='buttons-form-update'>
      <button className="submit-bttn delete" type="submit">Confirm Delete</button>
      </div>
    </form>
  )
}

export default DeleteCommentForm;
