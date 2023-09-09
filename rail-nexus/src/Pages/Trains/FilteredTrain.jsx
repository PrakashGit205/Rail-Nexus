import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import RunningTrainsService from "../../Services/RunningTrains.service";
import SeatService from "../../Services/Seat.service";
import "../Stations/effects.css";
import { Button } from "react-bootstrap";
import "./sidebarCss.css";
import moment from 'moment'
import { useMyContext } from "../../MyContext";
import { Divider } from "@mui/material";
function FilteredTrain(props) {
  const history = useHistory();
  const location = useLocation();
  const formData = props.filters;
  const {filters,setFilters} = useMyContext();
  const [trains, setTrains] = useState([]);
  const [expandedTrainId, setExpandedTrainId] = useState(null);
  const [Seats, setSeats] = useState([]);
  var traifilter;
  const seenTrainNumbers = new Set();
  const [filteredData,setFilterData] = useState([]);
  useEffect(() => {
    console.log("in train type")
    console.log(formData)
    // sessionStorage.setItem("chosen stations", JSON.stringify(formData))
    RunningTrainsService.post(formData)
      .then ( (response) =>  {
        console.log('Printing trains data', response.data);
        setTrains(response.data);
        var currentDate ;
        if(filteredData.originDate==""){

         currentDate = moment();
        }
        else 
        currentDate = filteredData.originDate;

        // Filter the data array based on the date property
         setFilterData(response.data.filter(item => {
          // Assuming 'item.date' is a string representing the date (e.g., "2023-08-23")
          const itemDate = moment(item.date);
      
          // Compare the item's date to the current date
          return itemDate.isSame(currentDate, 'day');
        }));
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  }, []);
  useEffect(() => {
    console.log("in train type")
    console.log(formData)
  
    RunningTrainsService.post(filters)
      .then ( (response) =>  {
        console.log('Printing trains data', response.data);
        setTrains(response.data);
        var currentDate ;
        if(filteredData.originDate==""){

         currentDate = moment();
        }
        else 
        currentDate = filteredData.originDate;

       
         setFilterData(response.data.filter(item => {
         
          const itemDate = moment(item.date);
      
        
          return itemDate.isSame(currentDate, 'day');
        }));
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  }, [filters]);

  useEffect(() => {console.log("it is changing")}, [filters.originDate]);
  const bookTrain = (train,seat) => {
// seat.trainNo = trainNo;
const seatEncoded = btoa(JSON.stringify(seat));
const trainEncoded = btoa(JSON.stringify(train));
const stationEncoded = btoa(JSON.stringify(formData));

sessionStorage.setItem("seat", seatEncoded);
sessionStorage.setItem("train", trainEncoded);
sessionStorage.setItem("station", stationEncoded);
    history.push({
      pathname: '/book-seat', 
      state: {seat,train,formData}
    });
  
    };

  const toggleSeatView = (id,originDate) => {
    if (expandedTrainId === id) {
      setExpandedTrainId(null);
      setSeats([]);
    } else {
      setExpandedTrainId(id);
     
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
    {trains !== null && trains.length > 0 ? (
      <div>
        <h2>Trains From {trains[0].originStatioin} To {trains[0].departStation}</h2>
        <p className="font-weight-normal">Distance: {trains[0].distance} KM</p>
        <br />
        <table className="table table-hovered table-responsive-md  table-borderless  table-hover">
          <thead  className="thead-dark bg-dark text-white">
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Train Arrival Time</th>
              <th>Train Departure Time</th>
              <th>Train Departure Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
  {trains.map((train, index) => (
    <React.Fragment key={index}>
      <tr className="bg-light mb-2 rounded">
        <td>{train.trainName}</td>
        <td>{train.trainNo}</td>
        <td>{train.originTime}</td>
        <td>{train.departTime}</td>
        <td>{train.originDate}</td>
        <td>
          <button className="btn btn-success" onClick={() => toggleSeatView(train.id, train.originDate)}>
            {expandedTrainId === train.id ? "Hide Seats" : "View Seats"}
          </button>
        </td>
      </tr>
      {expandedTrainId === train.id && (
        <>
          <tr className="bg-secondary text-white thead-success">
            <th>classType</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {Seats.map((seat, index) => (
            <tr key={index} className="bg-outline-info mb-2 rounded">
              <td>{seat.classType}</td>
              <td>{seat.availableSeats}</td>
              <td>{"₹" + seat.fair}</td>
              <td>
                <button className="btn btn-outline-primary" onClick={() => bookTrain(train, seat)}>
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </>
      )}
    </React.Fragment>
  ))}
</tbody>
        </table>
      </div>
    ) : (
      <div className="row bg-light mb-2 rounded">
        <div className="col-md-12 py-2">No trains available for this route at {filters.originDate}.</div>
      </div>
    )}
  </div>
</div>



    </>
  );
}

export default FilteredTrain;
