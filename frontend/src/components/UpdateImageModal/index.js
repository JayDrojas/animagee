import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateImageForm from './UpdateImageForm';

function UpdateImageModal({user, image}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Update Image</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateImageForm image={image} user={user} hideModal={() => setShowModal(false)} />
            </Modal>
          )}
        </>
      );
    }

export default UpdateImageModal;