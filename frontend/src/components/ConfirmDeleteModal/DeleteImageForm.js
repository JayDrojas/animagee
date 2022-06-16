import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteImage } from "../../store/images";

function DeleteCommentForm ({ hideModal, image }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteImage(image?.id));
    history.push('/')
  };


  return (
    <form onSubmit={handleDelete}>
      <h3>Are you sure you want to delete this Image?</h3>
      <div id='buttons-form-update'>
      <button className='submit-bttn delete' type="submit">Confirm Delete</button>
      </div>
    </form>
  )
}

export default DeleteCommentForm;
