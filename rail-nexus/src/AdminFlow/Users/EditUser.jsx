import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../Services/User.service';
// import Button from '@mui/material/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Edit } from '@mui/icons-material';
function EditUserPage({ match }) {
  const userId = match.params.id; // Extract the user ID from the URL params
  const [user, setUser] = useState({
    id: null,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    userName: '',
    regDate: '',
    mobile: '',
    gender: '',
    role: '',
  });

  useEffect(() => {
    // Fetch user data using the user ID from the API
    // Update the following code according to your actual implementation
    UserService.get(userId)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error fetching user", error);
      });
  }, [userId]);

  const handleFieldChange = (fieldName, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  const handleSave = () => {
    // Send updated user data to the API for saving
    // Update the following code according to your actual implementation
    UserService.updateUser(user)
      .then(() => {
        // Redirect to the user list page or do something else
      })
      .catch((error) => {
        console.log("Error updating user", error);
      });
  };

  return (
    <Container>
    <h2>Edit User</h2>
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <TextField
              value={user.firstName}
              onChange={(e) => handleFieldChange('firstName', e.target.value)}
              fullWidth
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <TextField
              value={user.lastName}
              onChange={(e) => handleFieldChange('lastName', e.target.value)}
              fullWidth
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <TextField
              value={user.address}
              onChange={(e) => handleFieldChange('address', e.target.value)}
              fullWidth
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {/* Add more input fields similarly */}
        </Col>
      </Row>
      {/* Add more rows for additional fields */}
      <Button variant="contained" color="primary" onClick={handleSave}>
        <Edit /> Save
      </Button>
    </Form>
  </Container>
  );
}

export default EditUserPage;
