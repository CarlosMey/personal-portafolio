import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ImageModal({ imageUrl }) {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Image Modal
      </Button>

      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Image Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={imageUrl} 
            alt="Preview" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageModal;
