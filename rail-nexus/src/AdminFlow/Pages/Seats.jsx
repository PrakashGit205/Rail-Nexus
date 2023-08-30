import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const TrainStatusPage = () => {
  const [seatsInfo, setSeatsInfo] = useState({
    bookedSeats: 0,
    totalSeats: 100, // Assuming a total of 100 seats for example
  });

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTrain, setSelectedTrain] = useState('Train A');

  useEffect(() => {
    // Replace this with your actual API call to fetch seat information
    // For now, using a dummy setTimeout to simulate fetching data
    setTimeout(() => {
      const seatData = {
        'Train A': {
          '2023-08-25': {
            bookedSeats: Math.floor(Math.random() * 50),
            totalSeats: 100,
          },
          // Add more dates as needed
        },
        'Train B': {
          '2023-08-25': {
            bookedSeats: Math.floor(Math.random() * 70),
            totalSeats: 120,
          },
          // Add more dates as needed
        },
        // Add more trains as needed
      };

      const dateData = seatData[selectedTrain][selectedDate];
      setSeatsInfo(dateData);
    }, 1000); // Simulating a delay
  }, [selectedDate, selectedTrain]);

  const remainingSeats = seatsInfo.totalSeats - seatsInfo.bookedSeats;

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Train Status</h2>

          <Form.Group>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Select Train</Form.Label>
            <Form.Control
              as="select"
              value={selectedTrain}
              onChange={(e) => setSelectedTrain(e.target.value)}
            >
              <option>Train A</option>
              <option>Train B</option>
              {/* Add more train options here */}
            </Form.Control>
          </Form.Group>

          <p>Date: {selectedDate}</p>
          <p>Train: {selectedTrain}</p>
          <p>Number of seats booked: {seatsInfo.bookedSeats}</p>
          <p>Number of seats left: {remainingSeats}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainStatusPage;
