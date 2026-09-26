import React from 'react';

const Modal = () => {
  return (
    <div className="modal fade" id="bienvenidaModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">¡Arquitectura React Lista!</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body text-center p-4">
            <p>La UI está componentizada, usa hooks para optimización (debounce) y los datos están listos para conectarse a una API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;