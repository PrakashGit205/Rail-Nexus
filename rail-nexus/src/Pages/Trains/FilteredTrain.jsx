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

  useEffect(() => {
    RunningTrainsService.post(formData)
      .then((response) => {
        console.log('Printing trains data', response.data);
        setTrains(response.data);
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
          setSeats(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <br /><br />
      <div className={`container mt-5 fade-in`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark text-white">
                <div className="col-md-3 rounded-left py-2">Train Name</div>
                <div className="col-md-3 py-2">Train Number</div>
                <div className="col-md-3 py-2">Train Type</div>
                <div className="col-md-3 rounded-right py-2">Actions</div>
              </div>
              {trains.map((train, index) => (
                <div key={index} className="row bg-light mb-2 rounded">
                  <div className="col-md-3 py-2">{train.trainName}</div>
                  <div className="col-md-3 py-2">{train.trainNo}</div>
                  <div className="col-md-3 py-2">{train.trainType}</div>
                  <div className="col-md-3 py-2">
                    <button className="btn btn-secondary mr-2" onClick={() => bookTrain(train.id)}>Book Train</button>{" "}
                    <button className="btn btn-success" onClick={() => toggleSeatView(train.id)}>
                      {expandedTrainId === train.id ? "Hide Seats" : "View Seats"}
                    </button>
                  </div>
                </div>
              ))}
              {/* Render seat data if expandedTrainId is set */}
              {expandedTrainId !== null && (
                <div className="row bg-light mb-2 rounded">
                  <div className="col-md-12">
                    {/* Render seat data here */}
                    {Seats.map((seat, index) => (
                      <div key={index}>Seat Number: {seat.seatNumber}, Availability: {seat.availability}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredTrain;
