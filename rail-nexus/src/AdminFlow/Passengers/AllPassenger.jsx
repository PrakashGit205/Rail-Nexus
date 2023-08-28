import React, { useEffect, useState } from 'react';
import PassengerServices from '../../Services/Passenger.service'; // Adjust the import path
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ScheduleIcon from '@mui/icons-material/Schedule';
// import TrainScheduleModal from './TrainScheduleModal'; // Import the TrainScheduleModal
import Table from 'react-bootstrap/Table';

function AllPassengers() {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    PassengerServices.getAll()
      .then((response) => {
        console.log("Printing passengers data", response.data);
        setPassengers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);


  return (
    <div className="container">
      <h2>All Passengers</h2>
      <div className="row">
        {passengers.map((passenger, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{passenger.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {passenger.gender}
                </Card.Subtitle>
                <Card.Text>
                  {/* Display other passenger details */}
                  <ScheduleIcon /> Booking Date: {passenger.bookingDate}
                </Card.Text>
                <Card.Text>
                  <ScheduleIcon /> Booking Date: {passenger.bookingDate}
                </Card.Text>
                <Card.Text>
                  <ScheduleIcon /> Source Station: {passenger.sourceStationName}
                </Card.Text>
                <Card.Text>
                  <ScheduleIcon /> Destination Station: {passenger.destinationStationName}
                </Card.Text>
                <Card.Text>
                  <ScheduleIcon /> Train Number: {passenger.trainNo}
                </Card.Text>
                <Card.Text>
                  <ScheduleIcon /> PNR: {passenger.PNR}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default AllPassengers;
