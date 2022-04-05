import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import CreateImageForm from "./CreateImageForm";

function CreateImgModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Create Image</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateImageForm hideModal={() => setShowModal(false)} />
            </Modal>
          )}
        </>
      );
    }

export default CreateImgModal;