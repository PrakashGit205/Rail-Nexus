import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TrainScheduleModal({ show, onHide, trainData }) {
  // Create an array for the days of the week
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Create an array of boolean values from the trainData
  const schedule = daysOfWeek.filter(day => trainData[day.toLowerCase()]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Train Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {schedule.length > 0 ? (
          <ul>
            {schedule.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        ) : (
          <p>No days scheduled for this train.</p>
        )}
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
