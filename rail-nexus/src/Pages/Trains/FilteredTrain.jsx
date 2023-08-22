import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import RunningTrainsService from "../../Services/RunningTrains.service";
import SeatService from "../../Services/Seat.service";
import "../Stations/effects.css";
import { Button } from "react-bootstrap";
import "./sidebarCss.css";

function FilteredTrain(props) {
  const history = useHistory();
  const location = useLocation();
  const formData = location.state.formData;
  const [trains, setTrains] = useState([]);
  const [expandedTrainId, setExpandedTrainId] = useState(null);
  const [Seats, setSeats] = useState([]);
  // const [filtered, setfiltered] = useState([])
  var traifilter;
  const seenTrainNumbers = new Set();
  useEffect(() => {
    console.log("in train type")
    console.log(formData)
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

  const bookTrain = (trainNo,seat) => {
seat.trainNo = trainNo;
    history.push({
      pathname: '/book-seat', // Destination path
      state: {seat } // Pass the data using the state property
    });
  
    };

  const toggleSeatView = (id,originDate) => {
    if (expandedTrainId === id) {
      setExpandedTrainId(null);
      setSeats([]);
    } else {
      setExpandedTrainId(id);
      // Fetch and set seats data for the selected train
      console.log({originDate:originDate ,trainNo : 1,originId: formData.originId,sourceId:formData.sourceId})
      SeatService.post({originDate:originDate ,trainNo : 1,originId: formData.originId,sourceId:formData.sourceId})
        .then((response) => {

          console.log(response.data)
          setSeats(response.data);
          console.log(Seats)
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
    
   <div className={`container mt-5 fade-in`}>
 
  <div className="container">
  
    {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}
        {/* add date filter source station and destionation station filter select option  */}

        {
          trains !== null && trains.length > 0 ? (
            <div>
            <p class="h2">Trains From {trains.at(0).originStatioin} To  {trains.at(0).departStation}</p>
            
<p class="font-weight-normal">Distance : {trains.at(0).distance} KM</p>
              <br />
            <div className="row bg-dark text-white rounded">
              <div className="col-md-2 rounded-left py-2">Train Name</div>
              <div className="col-md-2 py-2">Train Number</div>
              <div className="col-md-2 py-2">Train Arrival Time</div>
              <div className="col-md-2 py-2">Train Departure Time</div>
              <div className="col-md-2 py-2">Train Departure Date</div>
              <div className="col-md-2 rounded-right py-2">Actions</div>
            </div>
            {
            trains.map((train, index) => (
              <div key={index} className="row bg-light mb-2 rounded">
                <div className="col-md-2 py-2">{train.trainName}</div>
                <div className="col-md-2 py-2">{train.trainNo}</div>
                <div className="col-md-2 py-2">{train.originTime} </div>
                
                <div className="col-md-2 py-2">{train.departTime}</div>
                {/* <div className="col-md-2 py-2">{train.trainType}</div> */}
                <div className="col-md-2 py-2">{train.originDate}</div>
                <div className="col-md-2 py-2">
                  <button className="btn btn-success" onClick={() => toggleSeatView(train.id,train.originDate)}>
                    {
                    expandedTrainId === train.id ? "Hide Seats" : "View Seats"
                    }
                  </button>
                </div>
                {
                  expandedTrainId === train.id && (
                    <>
          <div className="row bg-secondary text-white rounded">
              <div className="col-md-2 rounded-left py-2">classType</div>
              {/* <div className="col-md-2 py-2">seatType</div> */}
              <div className="col-md-2 py-2">Available Seats</div>
              <div className="col-md-2 py-2">Price</div>
            </div>
              {/* Render seat data here */}
              {Seats.map((seat, index) => (
                <>
          <div className="row bg-outline-info mb-2 rounded">
            {/* <div className="col-md-12"> */}
                <div className="col-md-2 py-2" key={index}>  {seat.classType}</div>
                {/* <div className="col-md-2 py-2" key={index}> {seat.seatType}</div> */}
                <div className="col-md-2 py-2" key={index}>  {seat.availableSeats}</div>
                <div className="col-md-2 py-2" key={index}>{"₹"}   {seat.fair}</div>
                <button className=" btn btn-outline-info col-md-2 py-2" onClick={() => bookTrain(train.id,seat)}>Book Ticket</button>{" "}
            {/* </div> */}
          </div>
                </>
              ))}
          </>
        )}
              </div>
            ))}
          </div>
        ) : (
          <div className="row bg-light mb-2 rounded">
            <div className="col-md-12 py-2">No trains available on this route.</div>
          </div>
        )}
        {/* Render seat data if expandedTrainId is set */}
        
      </div>
    {/* </div> */}
  {/* </div> */}
</div>


    </>
  );
}

export default FilteredTrain;
