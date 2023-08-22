import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import RunningTrainsService from "../../Services/RunningTrains.service";
import SeatService from "../../Services/Seat.service";
import "../Stations/effects.css";
import { Button, CardGroup } from "react-bootstrap";
import "./sidebarCss.css";
// import {  Card, Button } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
    //   style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
      className='btn btn-primary'
    >
      {children}
    </button>
  );
}

function Example() {
    const history = useHistory();
    const location = useLocation();
    const formData = location.state.formData;
    const [trains, setTrains] = useState([]);
    const [expandedTrainId, setExpandedTrainId] = useState(null);
    const [Seats, setSeats] = useState([]);
    const [filtered, setfiltered] = useState([])
    var traifilter;
    const seenTrainNumbers = new Set();
    useEffect(() => {
      RunningTrainsService.post(formData)
        .then((response) => {
          console.log('Printing trains data', response.data);
          setTrains(response.data);
  
          traifilter = trains.filter(train => {
            if (!seenTrainNumbers.has(train.trainNo)) {
              seenTrainNumbers.add(train.trainNo);
              return true;
            }
            return false;
          });
  
          console.log(traifilter)
  
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }, []);
  
    const bookTrain = (id) => {
      // Your bookTrain logic here
    };
  
    const toggleSeatView = (id) => {
      if (expandedTrainId === id) {
        setExpandedTrainId(null);
        setSeats([]);
      } else {
        setExpandedTrainId(id);
        // Fetch and set seats data for the selected train
        SeatService.get(id)
          .then((response) => {
  
            console.log(response.data)
            setSeats(response.data);
            console.log(Seats)
          })
          .catch((error) => console.log(error));
      }
    };
    
  return (
    <Accordion defaultActiveKey="0">
     {trains.map((train, index) => (
        <Card key={index}>
          <Card.Header>
          
            {/* <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
              Train Name: {train.trainName} | Train Number: {train.trainNo} | Train Type: {train.trainType}
            </Accordion.Toggle> */}
          </Card.Header>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>
              <div>
                
                <button className="btn btn-secondary mr-2" onClick={() => bookTrain(train.id)}>Book Train</button>{" "}
                <button className="btn btn-success" onClick={() => toggleSeatView(train.id)}>
                  {expandedTrainId === train.id ? "Hide Seats" : "View Seats"}
                </button>
              </div>
              {expandedTrainId === train.id && (
                <div>
                  {train.seats.map((seat, seatIndex) => (
                    <div key={seatIndex}>Seat Number: {seat.seatNumber}, Availability: {seat.availability}</div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default Example;