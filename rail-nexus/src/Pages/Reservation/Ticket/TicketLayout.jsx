import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TicketLayout = () => {
//   var passengerData;
  const [passengerData, setPassengerData] = useState({});
  useEffect(() => {
    const storedPassengerData = JSON.parse(atob(sessionStorage.getItem('passenger')));
    setPassengerData(storedPassengerData);
    console.log(passengerData);
  }, []);

  return (
    <>
      <div style={{ borderRadius: 20, padding: 20 }}>
        <div
          style={{
            border: '1px black solid',
            borderRadius: 20,
            padding: 25,
            backgroundColor: 'whitesmoke',
          }}
        >
          <header
            style={{
              backgroundColor: 'midnightblue',
              color: 'white',
              borderRadius: 5,
              textAlign: 'center',
              height: 'fit-content',
              padding: 5,
            }}
          >
            <p>
              <b>RailNexus</b> <br />
              Have A Great Journey with US.
            </p>
          </header>
          <hr />
          <div
            style={{
              textAlign: 'center',
              width: '90%',
              margin: 20,
              padding: 1,
            }}
          >
            <div style={{ display: 'flex', gap: '34%' }}>
              <div>
                <h5>PRN : {passengerData.PNR}</h5>
              </div>
              <div>
                <h5>Transaction ID : {passengerData.transactionId}</h5>
              </div>
            </div>
          </div>
          <hr />
          <h5 style={{ paddingLeft: 10 }}>
            <u>
              <b>Duranto Express (12270)</b>
            </u>
          </h5>
          <br />
          <div style={{ display: 'flex', gap: '17%' }}>
            <div style={{ paddingLeft: 20 }}>
              <h6>
                <u>From</u>
              </h6>
              <p>
                {passengerData.originDate} <br />
                <b>{passengerData.sourceStation}</b>
                <br />
                Departure Time : {passengerData.sourceTime}
              </p>
            </div>
            <div>
              <h6>
                <u>To</u>
              </h6>
              <p>
                {passengerData.destinationDate} <br />
                <b>{passengerData.destinationStation}</b>
                <br />
                Arrival Time : {passengerData.destinationTime}
              </p>
            </div>
            <div>
              <h6>Name : {passengerData.name}</h6>
              Gender : {passengerData.gender}
              <br />
              Status : {passengerData.status}
              <br />
              Class : {passengerData.classType}
              <br />
              Coach (Seat) : {passengerData.coach}
              <br />
              Seat No. : {passengerData.seatNo}{' '}
              <b>{passengerData.gender === 'male' ? ' (M) ' : ' (F) '}</b>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ paddingLeft: 30 }}>
          <h6>
            Fare : ₹{passengerData.fair}/- (
            {convertToWords(passengerData.fair)})
          </h6>
        </div>
        <hr />
      </div>
      <br />
    </>
  );
};

// Function to convert a number to words
const convertToWords = (num) => {
  // Implement your logic to convert the number to words
  // For example: 670 -> Six Hundred Seventy Rupees and Zero Paisa only
  return 'To Be Implemented';
};

export default TicketLayout;
