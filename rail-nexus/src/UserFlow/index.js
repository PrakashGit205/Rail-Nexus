import { Switch, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProtectedRoute from "../Security/ProtectedRoute";
import MyBookings from "./Bookings";
import History from "./History";
import Profile from "./Profile";
// import Sidebar from "./TempSidebar";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { Edit, ExitToApp } from "@mui/icons-material";
import { useMyContext } from "../MyContext";
function UserController() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const [editedData, setEditedData] = useState({ ...userData });

  const profileSidebarStyles = {
    backgroundColor: "black",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  };

  const userIconStyles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    backgroundColor: "#ffffff",
    color: "#3498db",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const profileActionsStyles = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  };

  const profileContentStyles = {
    padding: "20px",
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
  const LogOut = () => {
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("isLoggedIn123");
    sessionStorage.removeItem("isLoggedIn098");
    setIsLoggedIn(false);
    history.push("/")
}
const {setIsLoggedIn} = useMyContext();

  const handleSaveChanges = () => {
    // Handle saving changes to the backend or wherever needed
    // For now, we'll just update the userData state for demonstration
    setEditedData({ ...editedData });
    setShowModal(false);
  };
  console.log("in user controller");
 var userData = JSON.parse(atob(sessionStorage.getItem("User")));
  return (
    <>
      {/* <UserSidebar></UserSidebar> */}
      {/* <Sidebar></Sidebar> */}
      {/* <Button onClick={handleSidebarOpen}>Open Sidebar</Button> */}
      {/* <UserProfileSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} /> */}
      <Container fluid>
        <Row>
          {/* <Col sm={2} style={profileSidebarStyles}> */}
          <Col sm={12} md={3} lg={2} style={profileSidebarStyles}>
            <div
              style={userIconStyles}
              onClick={() => history.push("/profile")}
            >
              {userData.firstName.charAt(0).toUpperCase()}
            </div>
            <div style={profileActionsStyles}>
              <Button
                variant="outline-light"
                startIcon={<Edit />}
                onClick={() => history.push("/profile")}
              >
                My Profile
              </Button>
              <Button
                variant="outline-light"
                startIcon={<Edit />}
                onClick={() => history.push("/history")}
              >
                History
              </Button>
              <Button
                variant="outline-light"
                startIcon={<Edit />}
                onClick={() => history.push("/bookings")}
              >
                Bookings
              </Button>
              <Button variant="outline-light" onClick={LogOut} startIcon={<ExitToApp />}>
                Logout
              </Button>
            </div>
          </Col>
          <Col sm={12} md={9} lg={10} style={profileContentStyles}>
            
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/bookings" component={MyBookings} />
            <ProtectedRoute exact path="/history" component={History} />

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
                      onChange={(e) =>
                        handleFieldChange("firstName", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editedData.lastName}
                      onChange={(e) =>
                        handleFieldChange("lastName", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={editedData.address}
                      onChange={(e) =>
                        handleFieldChange("address", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={editedData.email}
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      value={editedData.mobile}
                      onChange={(e) =>
                        handleFieldChange("mobile", e.target.value)
                      }
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
        </Row>
      </Container>
    </>
  );
}

export default UserController;
