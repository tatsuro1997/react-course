import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHadler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHadler}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    );
}

export default Todo;
