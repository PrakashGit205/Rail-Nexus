import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form } from 'react-bootstrap';
import { Edit, ExitToApp } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UpComingJourney from './UpComingJourney';

const UserProfile = ({ }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });
  const history = useHistory();
  var userData =
  userData = JSON.parse(atob(sessionStorage.getItem("User")));
  useEffect(()=>{
    console.log("printing user dat in user profile")
console.log(userData);
console.log(editedData);
  },[])


  const profileContentStyles = {
    padding: '20px',
  };

  const userNameStyles = {
    fontWeight: 'bold',
    color: 'black',
  };

  const userDetailsStyles = {
    color: '#000000',
  };

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleFieldChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle saving changes to the backend or wherever needed
    // For now, we'll just update the userData state for demonstration
    setEditedData({ ...editedData });
    setShowModal(false);
  };

  return (
    <Container fluid>
      <Row>
        {/* <Col sm={2} style={profileSidebarStyles}> */}
        {/* <Col sm={2} style={profileSidebarStyles}>
          <div style={userIconStyles}>
            {userData.firstName.charAt(0).toUpperCase()}
          </div>
          <div style={profileActionsStyles}>
            <Button variant="outline-light" startIcon={<ExitToApp />}>
              Logout
            </Button>
            <Button variant="outline-light" startIcon={<Edit />} onClick={handleEditClick}>
              Edit Profile
            </Button>
            <Button variant="outline-light" startIcon={<Edit />} onClick={()=>history.push("/history")}>
             History
            </Button>
            <Button variant="outline-light" startIcon={<Edit />} onClick={()=>history.push("/bookings")}>
             Bookings
            </Button>
          </div>
       
        </Col> */}
        <Col sm={6} style={profileContentStyles}>
          <h1>
            Welcome, <span style={userNameStyles}>{userData.firstName}</span>!
          </h1>
          <Card>
            <Card.Header>User Details</Card.Header>
            <Card.Body>
              <Card.Text style={userDetailsStyles}>
                <p>Username: {editedData.userName}</p>
                <p>Email: {editedData.email}</p>
                <p>Address: {editedData.address}</p>
                <p>Registration Date: {editedData.regDate}</p>
                <p>Mobile: {editedData.mobile}</p>
                <p>Gender: {userData.gender}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-light" className='btn btn-primary' startIcon={<Edit />} onClick={handleEditClick}>
                Edit Profile
              </Button>
            </Card.Footer>
          </Card>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="modal-top"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editedData.firstName}
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editedData.lastName}
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={editedData.address}
                    onChange={(e) => handleFieldChange('address', e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={editedData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    value={editedData.mobile}
                    onChange={(e) => handleFieldChange('mobile', e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <UpComingJourney profileContentStyles = {profileContentStyles}></UpComingJourney>
      </Row>
    </Container>
  );
};

export default UserProfile;
