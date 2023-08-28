import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PassengerService from '../Services/Passenger.service';
function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("in booking page")
    // Fetch user's bookings using PassengerServices (replace with actual code)
    PassengerService.get(1) 
      .then((response) => {
        console.log("Printing user bookings data", response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log("Error fetching user bookings", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>My Bookings</h2>
      <div className="row">

        
        {bookings.map((booking) => (
          <div key={booking.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{booking.name}</Card.Title>
              <Card.Text>Seat Status: {booking.seatStatus}</Card.Text>
              <Card.Text>Seat Number: {booking.seatNo}</Card.Text>
                <Card.Text>Train Number: {booking.trainNo}</Card.Text>
                <Card.Text>Source Time: {booking.sourceTime}</Card.Text>
                <Card.Text>Destination Time: {booking.destinationTime}</Card.Text>
                <Card.Text>Train departure date: {booking.orignDate}</Card.Text>
                
                {/* Display other relevant booking details */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
