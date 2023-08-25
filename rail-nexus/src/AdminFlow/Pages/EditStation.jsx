import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditStationPage = () => {
  const initialStationDetails = {
    id: 123, // Example ID
    name: '',
    code: '',
    cityName: '',
  };
useEffect(()=>{console.log("hii")},[])
  const [stationDetails, setStationDetails] = useState(initialStationDetails);
  const [viewMode, setViewMode] = useState(true); // Start in view mode

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setViewMode(false); // Switch to edit mode
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Station details saved:', stationDetails);
    setViewMode(true); // Switch back to view mode after saving
  };

  return (
    <Container>
      <h2>Edit Station</h2>
      <Form>
        {/* Render ID input only in edit mode */}
        {!viewMode && (
          <Form.Group controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" value={stationDetails.id} readOnly />
          </Form.Group>
        )}

        <Form.Group controlId="name">
          <Form.Label>Station Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={stationDetails.name}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="code">
          <Form.Label>Station Code</Form.Label>
          <Form.Control
            type="text"
            name="code"
            value={stationDetails.code}
            onChange={handleInputChange}
            readOnly={viewMode}
          />
        </Form.Group>

        <Form.Group controlId="cityName">
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
            name="cityName"
            value={stationDetails.cityName}
            onChange={handleInputChange}
            readOnly={viewMode}
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

export default EditStationPage;
