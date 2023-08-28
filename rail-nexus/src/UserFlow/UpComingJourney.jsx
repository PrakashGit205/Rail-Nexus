import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import PassengerService from "../Services/Passenger.service";
import log from "./log";

function UpComingJourney(props) {
  const { profileContentStyles } = props;

  const [passengers, setPassengers] = useState([]);
  const user = JSON.parse(atob(sessionStorage.getItem('User')));
  var temp;
  useEffect(() => {
    log("in upcoming journey")
    log(user.id);
    log(user);
    PassengerService.get(user.id).then((response) => {
      if(response.data != null)
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
  return (
    <>
      <Col sm={6} style={profileContentStyles}>
        <h1>
          Welcome,
        </h1>
        <Card>
          <Card.Header>User Details</Card.Header>
          <Card.Body>
            <Card.Text>
              {
                passengers != null ? (
                passengers.map((passenger) => {
                  return (<>
                    <p>PNR: {passenger.pnr}</p>
                    {/* <p>Email: {editedData.email}</p>
                    <p>Address: {editedData.address}</p>
                    <p>Registration Date: {editedData.regDate}</p>
                    <p>Mobile: {editedData.mobile}</p>
                    <p>Gender: {userData.gender}</p> */}
                  </>
                  )
                })) : (<h1>You donot have any UpComing Journeys!!!</h1>)
                  
                
              }

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light" className='btn btn-primary' startIcon={<Edit />}>
              Edit Profile
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default UpComingJourney;