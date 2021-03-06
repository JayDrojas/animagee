import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateCommentForm from "./CreateCommentForm";
import { useSelector } from 'react-redux';
function CreateCommentModal () {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  return (
    <>
      <button className="submit-bttn"
      onClick={() => setShowModal(true)}>
      Create Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentForm hideModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  )
}

export default CreateCommentModal;
