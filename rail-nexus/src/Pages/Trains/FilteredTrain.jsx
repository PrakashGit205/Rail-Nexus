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
     
  
        <div className="scrollable-container">
        <div className="scrollable-content" >
        {
          trains !== null && trains.length > 0 ? (
            <div>
            <p class="h2">Trains From {trains.at(0).originStatioin} To  {trains.at(0).departStation}</p>
            
<p class="font-weight-normal">Distance : {trains.at(0).distance} KM</p>
              <br />
            <div className="row bg-dark text-white rounded ">
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
                <div className="col-md-2 py-2">{train.originDate}</div>
                <div className="col-md-2 py-2">
                  <button className="btn btn-success" onClick={() => toggleSeatView(train.id,train.originDate)}>
                    {
                    expandedTrainId === train.id ? "Hide Seats" : "View Seats"
                    }
                  </button>
                </div>
                {/* <Divider /> */}
                {
                  expandedTrainId === train.id && (
                    <>
          <div className="row bg-secondary text-white rounded">
              <div className="col-md-2 rounded-left py-2">classType</div>
              <div className="col-md-2 py-2">Available Seats</div>
              <div className="col-md-2 py-2">Price</div>
            </div>
              {Seats.map((seat, index) => (
                <>
          <div className="row bg-outline-info mb-2 rounded ">
                <div className="col-md-2 py-2" key={index +  5}>  {seat.classType}</div>
                <div className="col-md-2 py-2" key={index+.5}>  {seat.availableSeats}</div>
                <div className="col-md-2 py-2" key={index+.5}>{"₹"}   {seat.fair}</div>
                <button className=" btn btn-outline-primary col-md-2 py-2" onClick={() => bookTrain(train,seat)}>Book Ticket</button>{" "}
          </div>
          <Divider />
                </>
              ))}
          </>
        )}
              </div>
            ))}
          </div>
        ) : (
          <div className="row bg-light mb-2 rounded">
            <div className="col-md-12 py-2">No trains available for in this route at {filters.originDate} .</div>
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
