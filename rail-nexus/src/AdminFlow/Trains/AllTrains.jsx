import { useEffect, useState } from "react";
import TrainServices from "../../Services/Train.service";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TrainScheduleModal from "./trainSchedule";

function Trains() {
  var [trains, setTrains] = useState([]);
  const history =  useHistory();
  console.log("in trains")
  useEffect(() => {
    TrainServices.getAll()
      .then((response) => {
        console.log("Printing trains data", response.data);
        setTrains(response.data);
        // setTempemp(response.data);
        console.log(trains);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);
  const editTrain = (id) => {
    history.push("/admin/edit-train/"+id);
  }
  const deleteTrain = (id) => {

  }
  const cancelTrain = (id) => {

  }
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainSchedule, setSelectedTrainSchedule] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const viewTrainSchedule = (train) => {
    setSelectedTrain(train);
    setShowModal(true);
  };

  return (
    <>
      <div className="container">
        <div className="ro">
          <div className="col-md-4">

          </div>
      </div>
        <div className="row">
          {
            trains.map((train, index) => (
              <div key={index} className="col-md-4 mb-4" style={{ backgroundColor: " #f0f0f0" }} >
                <div className="card" style={{ backgroundColor: " #034f84", color: "white" }}>
                  <div className="card-body">
                    <h5 className="card-title">{train.trainName}</h5>
                    <p className="card-text">Number: {train.trainNo}</p>
                    <p className="card-text">Type: {train.trainType}</p>
                    {/* <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                      Delete
                    </Button> */}

                    <button className="btn btn-secondary" onClick={() => editTrain(train.id)}>Edit</button>
                    {" "}
                    <button className="btn btn-danger" onClick={() => deleteTrain(train.id)}>Remove</button>
                    {" "}
                    <button className="btn btn-warning" onClick={() => cancelTrain(train.id)}>Cancel</button>
                    <button onClick={() => viewTrainSchedule(train)}>
            View Train Schedule
          </button>
                  </div>
                </div>
              </div>
            ))}
            {selectedTrain && (
        <TrainScheduleModal
          show={showModal}
          onHide={() => setShowModal(false)}
          trainData={selectedTrain}
        />
      )}
        </div>
      </div>



    </>
  );
}

export default Trains;
