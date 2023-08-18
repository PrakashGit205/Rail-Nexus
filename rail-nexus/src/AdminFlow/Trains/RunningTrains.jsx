import { useEffect, useState } from "react";
import RunningTrainServices from "../../Services/RunningTrains.service";

function RunningTrains() {
  var [trains, setTrains] = useState([]);
  useEffect(() => {
    RunningTrainServices.getAll()
      .then((response) => {
        console.log("Printing trains data", response.data);
        setTrains(response.data);
        console.log(trains);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);
  const editTrain = (id) => {};
  const deleteTrain = (id) => {};
  const cancelTrain = (id) => {};
  const manageDelay = (id)=>{};
  const leftSeat =(id)=>{};
  return (
    <>
      <div className="container">
        <div className="row">
          {trains.map((train, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card" style={{backgroundColor:" #034f84",color:"white"}}>
                <div className="card-body">
                  <h5 className="card-text"> {train.trainName}</h5>
                  <p className="card-title">Number: {train.trainNo}</p>
                  <p className="card-text">
                    origin Statioin: {train.originStatioin}
                  </p>
                  <p className="card-text">
                    depart Station: {train.departStation}
                  </p>
                  <p className="card-text">origin Time: {train.originTime}</p>
                  <button onClick={() => leftSeat(train.id)} className=" btn btn-info">
                    View Left Seats
                  </button>{" "}
                 
                  <button onClick={() => manageDelay(train.id)} className=" btn btn-info">
                    Manage Delay Time
                  </button>
                  <br />
                  <br />
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTrain(train.id)}
                  >
                    Remove Stations
                  </button>{" "}
                  
                  <button
                    className="btn btn-warning"
                    onClick={() => cancelTrain(train.id)}
                  >
                    Cancel Train
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RunningTrains;
