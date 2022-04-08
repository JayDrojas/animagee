import UpdateCommentForm from './UpdateCommentForm';
import { Modal } from '../../context/Modal';
import { useState } from 'react'

function UpdateCommentModal ({comment}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="submit-bttn"
      onClick={() => setShowModal(true)}>
        Update Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateCommentForm  hideModal={() => setShowModal(false)} comment={comment}/>
        </Modal>
      )}
    </>
  )
}

export default UpdateCommentModal;
