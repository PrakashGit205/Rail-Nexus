import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditTrainPage = () => {
  const initialTrainDetails = {
    trainNo: '',
    trainName: '',
    originTime: '',
    originDestDistance: '',
    trainSpeed: '',
    originStationId: '',
    destinationStationId: '',
    trainType: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };

  const [trainDetails, setTrainDetails] = useState(initialTrainDetails);
  const [viewMode, setViewMode] = useState(true); // Start in view mode

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setTrainDetails((prevDetails) => ({
      ...prevDetails,
      [name]: inputValue,
    }));
  };

  const handleEdit = () => {
    setViewMode(false); // Switch to edit mode
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Train details saved:', trainDetails);
    setViewMode(true); // Switch back to view mode after saving
  };

  return (
    <Container>
      <h2>Edit Train</h2>
      <Form>
        <Form.Group controlId="trainNo">
          <Form.Label>Train Number</Form.Label>
          <Form.Control
            type="text"
            name="trainNo"
            value={trainDetails.trainNo}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="trainName">
          <Form.Label>Train Name</Form.Label>
          <Form.Control
            type="text"
            name="trainName"
            value={trainDetails.trainName}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="trainType">
          <Form.Label>Train Type</Form.Label>
          <Form.Control
            type="text"
            name="trainType"
            value={trainDetails.trainType}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="originStationId">
          <Form.Label>Origin Station ID</Form.Label>
          <Form.Control
            type="text"
            name="originStationId"
            value={trainDetails.originStationId}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="destinationStationId">
          <Form.Label>Destination Station ID</Form.Label>
          <Form.Control
            type="text"
            name="destinationStationId"
            value={trainDetails.destinationStationId}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="originTime">
          <Form.Label>Origin Time</Form.Label>
          <Form.Control
            type="time"
            name="originTime"
            value={trainDetails.originTime}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="originDestDistance">
          <Form.Label>Origin-Destination Distance</Form.Label>
          <Form.Control
            type="text"
            name="originDestDistance"
            value={trainDetails.originDestDistance}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="trainSpeed">
          <Form.Label>Train Speed</Form.Label>
          <Form.Control
            type="number"
            name="trainSpeed"
            value={trainDetails.trainSpeed}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        {/* Add more Form.Group elements for other train properties */}
        
        <Form.Group controlId="monday">
          <Form.Check
            type="checkbox"
            label="Monday"
            name="monday"
            checked={trainDetails.monday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="tuesday">
          <Form.Check
            type="checkbox"
            label="Tuesday"
            name="tuesday"
            checked={trainDetails.tuesday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="wednesday">
          <Form.Check
            type="checkbox"
            label="Wednesday"
            name="wednesday"
            checked={trainDetails.wednesday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="thursday">
          <Form.Check
            type="checkbox"
            label="Thursday"
            name="thursday"
            checked={trainDetails.thursday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="friday">
          <Form.Check
            type="checkbox"
            label="Friday"
            name="friday"
            checked={trainDetails.friday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="saturday">
          <Form.Check
            type="checkbox"
            label="Saturday"
            name="saturday"
            checked={trainDetails.saturday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group controlId="sunday">
          <Form.Check
            type="checkbox"
            label="Sunday"
            name="sunday"
            checked={trainDetails.sunday}
            onChange={handleInputChange}
            disabled={viewMode}
          />
        </Form.Group>

        {viewMode ? (
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default EditTrainPage;
