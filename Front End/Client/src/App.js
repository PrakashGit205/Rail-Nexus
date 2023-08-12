import Footer from "./Footer/Footer";
import TrainForm from "./FormDiv/TrainForm";
import Features from "./HomePage/Features";
import NavBar from "./NavBar/NavBar";
import Corousel from "./NavBar/corousel";
import { useState } from "react";
import Trains from "./Train/Trains";
import LoadSeats from "./Seat/LoadSeats";
// import Login from "./Login/Login";
// import './Login/'
import Controllor from "./Login/";
function App() {

  var [trainsReqrmnt, setTrainsReqrmnt] = useState({ sStnId: "", endStnId: "", journeyDate: "" });
  var [trains, setTrains] = useState([]);
  console.log(trainsReqrmnt.journeyDate);
  var [message, setMessage] = useState("")
  var [display, setDisplay] = useState("none");
  var [seatDisplay, setSeatDisplay] = useState("none");
  var [formDisplay, setFormDisplay] = useState('block');
  // var [train, setTrain] = useState({ trnNo: "", startCode: "", endCode: "", journeyDate: ""});
  var [seats, setSeats] = useState([]);
  const textchange = (args) => {
    debugger;
    let copytrainsReqrmnt = { ...trainsReqrmnt }

    copytrainsReqrmnt[args.target.name] = args.target.value;
    setTrainsReqrmnt(copytrainsReqrmnt);
  }
  const LoadSeat = (trnNo) => {
    var data = {train : {trnNo : trnNo,journeyDate : trainsReqrmnt.journeyDate}}
    var server = new XMLHttpRequest();
    debugger;
    server.onreadystatechange = () => {
      if (server.readyState == 4 && server.status == 200) {
        debugger;
        // setSeats([]);
        setSeats(JSON.parse(server.responseText));
        console.log(seats);
        setSeatDisplay("block");
      }
    }
    server.open("POST", `http://127.0.0.1:9999/seat`);
    server.setRequestHeader("Content-Type", "application/json");
    server.send(JSON.stringify(data));

  }
  const BookSeat = () => {
    
  }
  const LoadTrain = () => {
    debugger;
    
    var server = new XMLHttpRequest();
    server.onreadystatechange = () => {
      if (server.readyState == 4 && server.status == 200) {

        debugger;
        if (JSON.parse(server.responseText).length < 1) {
          setDisplay("none");
          setFormDisplay('block')
          setMessage("Train Not Found")
          setTrains([]);
        } else {
          if (trainsReqrmnt.journeyDate != "")
            setMessage("Running Trains From " + trainsReqrmnt.sStnId + " To " + trainsReqrmnt.endStnId + " in " +new Date(trainsReqrmnt.journeyDate).toLocaleString('en-us',{day:'2-digit',  month:'short', year:'numeric'})
            )
          else setMessage("Running Trains From " + trainsReqrmnt.sStnId + " To " + trainsReqrmnt.endStnId);
          setDisplay("block");
          setFormDisplay('none')

          setTrains(JSON.parse(server.responseText))

        }
      }
    }
    server.open("GET", `http://127.0.0.1:9999/trains/${trainsReqrmnt.sStnId}/${trainsReqrmnt.endStnId}/${trainsReqrmnt.journeyDate}`);
    server.send();
  }
  return (<>



    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* <NavBar></NavBar> */}
    <Corousel></Corousel>
    {/* <Controllor></Controllor> */}
    <TrainForm textchange={textchange} {...trainsReqrmnt} formDisplay={formDisplay} LoadTrain={LoadTrain}></TrainForm>
    <Trains trains={trains} display={display} message={message} formDisplay={setFormDisplay}  LoadSeat={LoadSeat}></Trains>
    <LoadSeats seatDisplay = {seatDisplay} seats = {seats} BookSeat = {BookSeat} ></LoadSeats>
    {/* <Features></Features>  */}

    <Footer></Footer>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>

  </>
  );
}

export default App;
