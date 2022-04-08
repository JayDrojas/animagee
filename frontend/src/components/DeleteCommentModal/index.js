import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DeleteCommentForm from './DeleteCommentForm';

function DeleteCommentModal ({ comment }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="submit-bttn"
      onClick={() => setShowModal(true)}>
        Delete Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentForm  hideModal={() => setShowModal(false)} comment={comment}/>
        </Modal>
      )}
    </>
  )
}

export default DeleteCommentModal;
