import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import PassengerService from "../Services/Passenger.service";
import log from "./log";

function UpComingJourney(props) {
  const { profileContentStyles } = props;
  const [showModal, setShowModal] = useState(false);
  const [passenger, setPassenger] = useState({});

  const [passengers, setPassengers] = useState([]);
  const user = JSON.parse(atob(sessionStorage.getItem('User')));
  var temp;
  useEffect(() => {
    log("in upcoming journey")
    log(user.id);
    log(user);
    PassengerService.get(user.id).then((response) => {
      if (response.data != null)
        setPassengers(response.data.filter(item => {
          const itemDate = new Date(item.trainDepartureDate).toLocaleDateString();
          // log(new Date().toLocaleDateString() + " "+ itemDate)
          // log(response.data);
          return itemDate >= new Date().toLocaleDateString();
        }));
      else {
        log("no data found");
        setPassengers();
      }
    }).catch((error) => {
      log(error);
    })
  }, [])
  log(passengers[0]);

  const handleViewClick = (passenger) => {
    setPassenger(passenger);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col sm={6} style={profileContentStyles}>
        <h1>
        Up coming Journey
        </h1>
        <Card>
          <Card.Header>Journey Details</Card.Header>
          <Card.Body>
            <Card.Text>
              {
                passengers != null ? (
                  passengers.map((passenger, index) => {
                    return (<>
                      <p>PNR: {passenger.pnr}</p>
                      <p>{passenger.trainDepartureDate} - {passenger.sourceTime}</p>
                      {/* <p>Address: {editedData.address}</p> */}
                      <Button variant="outline-light" className='btn btn-primary' startIcon={<Edit />} onClick={() =>{handleViewClick(passenger)}}>
                        View Details
                      </Button>
                      {/* <p>Registration Date: {editedData.regDate}</p> */}
                      {/* <p>Mobile: {editedData.mobile}</p> */}
                      {/* <p>Gender: {userData.gender}</p> */}



                      {index !== passengers.length - 1 && <hr></hr>}
                    </>
                    )
                  })) : (<h1>You donot have any UpComing Journeys!!!</h1>)
              }

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <Button variant="outline-light" className='btn btn-primary' startIcon={<Edit />}>
              Edit Profile
            </Button> */}
          </Card.Footer>
        </Card>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          dialogClassName="modal-top"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title><b>PNR: {passenger.pnr}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>Start Time: </b>
            <p>{passenger.trainDepartureDate} : {passenger.sourceTime}</p>
            <p>{passenger.destinationStationName} Jabalpur - Bhopal{passenger.sourceStationName}</p>
            <p>Status: {passenger.seatStatus}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="x" onClick={handleCloseModal}>
              Cancel Reservation
            </Button>
            <Button variant="warning" onClick={handleCloseModal}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button> */}
          </Modal.Footer>
        </Modal>

      </Col>
    </>
  );
}

export default UpComingJourney;