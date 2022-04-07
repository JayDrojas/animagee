import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateImageForm from "./CreateImageForm";

function CreateImgModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button className="submit-bttn" onClick={() => setShowModal(true)}>Create Image</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateImageForm hideModal={() => setShowModal(false)} />
            </Modal>
          )}
        </>
      );
    }

export default CreateImgModal;
