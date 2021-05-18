import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ modalOpen, setModalOpen ] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalOpen && <Modal />}
      {modalOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
