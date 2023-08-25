import { useEffect, useState } from "react";
import StationServices from "../../Services/Station.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Stations() {
  var [Stations, setTrains] = useState([]);
 const history =  useHistory();
  useEffect(() => {
    StationServices.getAll()
      .then((response) => {
        console.log("Printing stations data", response.data);
        setTrains(response.data);
        // setTempemp(response.data);
        console.log(Stations);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);
  const editStation = (id)=>{
    history.push("/admin/edit-station/"+id);
  }
  const deleteStation = (id)=>{
    
  }
  const cancelStation = (id)=>{
    
  }
  return (
    <>
    <div className="container">
  <div className="row">
    {Stations.map((Station, index) => (
      <div key={index} className="col-md-4 mb-4">
        <div className="card" style={{backgroundColor:" #034f84",color:"white"}}>
          <div className="card-body">
            <h5 className="card-title">{Station.name}</h5>
            <p className="card-text">Name: {Station.code}</p>
            <p className="card-text">City Name: {Station.cityName}</p>
            <div className="btn-group">
            <button className="btn btn-secondary" onClick={() => editStation(Station.id)}>Edit</button>
              {" "}
              <button className="btn btn-danger" onClick={() => deleteStation(Station.id)}>Remove</button>
              {" "}
              <button className="btn btn-warning" onClick={() => cancelStation(Station.id)}>Cancel</button>
          </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  );
}

export default  Stations ;
