import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TrainScheduleModal({ show, onHide, schedule }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Train Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {schedule.map((day, index) => (
          <p key={index}>{day}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrainScheduleModal;
