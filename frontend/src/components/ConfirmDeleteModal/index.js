import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DeleteImageForm from './DeleteImageForm'

function ConfirmDeleteImageModal ({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="submit-bttn delete"
      onClick={() => setShowModal(true)}>
        Delete Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteImageForm  hideModal={() => setShowModal(false)} image={image}/>
        </Modal>
      )}
    </>
  )
}

export default ConfirmDeleteImageModal;
